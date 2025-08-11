import { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import type { IngredientRow, MealByIdProps } from "../types";
import { fetchMealsById } from "../services/apiServices";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import { extractIngredients } from "./utils/utils";

const Meal = () => {
  const { mealId } = useParams();

  const [meal, setMeal] = useState<MealByIdProps | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [ingredients, setIngredients] = useState<IngredientRow[]>([]);

  useEffect(() => {
    if (!mealId) {
      setMeal(undefined);
      setLoading(false);
      return;
    }

    setMeal(undefined);
    setLoading(true);

    const controller = new AbortController();

    (async () => {
      try {
        const data = await fetchMealsById(mealId, controller.signal);
        const first = data?.meals?.[0];
        if (first) {
          setMeal(first);
          setIngredients(extractIngredients(first));
        }
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        console.error(e);
        setMeal(undefined);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [mealId]);

  if (isLoading) return <CircularProgress />;

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
        mt:3
      }}
    >
      <Card sx={{ overflow: "hidden", borderRadius: 2 }}>
        <CardMedia
          component="img"
          image={meal?.strMealThumb}
          alt={meal?.strMeal}
          sx={{ aspectRatio: "16 / 9", objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {meal?.strMeal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {meal?.strCategory} — Area: {meal?.strArea} — ID:{" "}
            {meal?.idMeal}
          </Typography>
        </CardContent>
      </Card>


      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Ingredients
          </Typography>
          <List dense>
            {ingredients.map((row, idx) => (
              <ListItem key={idx} disableGutters>
                <ListItemText
                  primary={row.ingredient}
                  secondary={row.measure}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Card
        sx={{ gridColumn: { xs: "1 / -1", md: "1 / -1" }, borderRadius: 2 }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Instructions
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {meal?.strInstructions
            .split(/\r?\n/)
            .filter(Boolean)
            .map((p, i) => (
              <Typography key={i} paragraph>
                {p}
              </Typography>
            ))}
          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
            {meal?.strYoutube && (
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
              >
                Watch on YouTube
              </Button>
            )}
            <Button variant="text" component={RouterLink} to="/">
              Back to list
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Meal;
