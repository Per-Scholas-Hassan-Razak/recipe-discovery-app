import { CircularProgress, Grid,  Typography } from "@mui/material";
import { useSelectedCategory } from "../contexts/context";

import { useEffect, useState } from "react";
import type { MealProps } from "../types";
import { fetchMealsByCategory } from "../services/apiServices";

import MealCard from "./MealCard";

const MealList = () => {
  const { selectedCategory } = useSelectedCategory();

  const [meals, setMeals] = useState<MealProps[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller  = new AbortController();
    
    (async () => {
      try {
        setLoading(true);
        const data = await fetchMealsByCategory(selectedCategory,controller.signal);
        if (data && data.meals) {
          setMeals(data.meals);
        }
      } catch (e) {
     if (e instanceof DOMException && e.name === "AbortError") return;
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [selectedCategory]);

  if (isLoading) return <CircularProgress />;

  if (!meals.length) return <Typography>No meals found.</Typography>;

  return (
 <>
      <Grid container spacing={2} mt={3} sx={{
        display:'flex',
        justifyContent:'center'
      }}>
        {meals.map((m) => (
          <Grid
            key={m.idMeal}
            item
            xs={12}   
            sm={6}    
            md={3}    
            lg={3}
            xl={3}
          >
            <MealCard meal={m} />
          </Grid>
        ))}
      </Grid>
    </>
 
  );
};

export default MealList;
