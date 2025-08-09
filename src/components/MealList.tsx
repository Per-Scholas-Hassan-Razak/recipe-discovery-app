import { CircularProgress, List, ListItem, ListItemText } from "@mui/material";
import { useSelectedCategory } from "../contexts/context";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { MealProps } from "../types";
import { fetchMealsByCategory } from "../services/apiServices";

const MealList = () => {
  const { selectedCategory } = useSelectedCategory();

  const [meals, setMeals] = useState<MealProps[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const getMeals = async () => {
    
    try {
      setLoading(true);
      const data = await fetchMealsByCategory(selectedCategory);
      if (data && data.meals) {
        setMeals(data.meals);
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeals();
  }, [selectedCategory]);

  if (isLoading) return <CircularProgress />;

  return (
    <List>
      {meals.map((m) => (
        <ListItem>
          <ListItemText>
            <Link to={`/meals/${m.idMeal}`}>{m.idMeal}</Link>
          </ListItemText>
          <ListItemText>{m.strMeal}</ListItemText>
          <ListItemText>{m.strMealThumb}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default MealList;
