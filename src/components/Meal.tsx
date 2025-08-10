import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { MealByIdProps } from "../types"
import {  fetchMealsById } from "../services/apiServices"
import { Box, Card, CardActions, CardContent, CardMedia, CircularProgress, IconButton, Tooltip, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Meal = () => {
    
    const {mealId} = useParams() 

    const [meal, setMeal] = useState<MealByIdProps| undefined>(undefined)
    const [isLoading, setLoading] = useState<boolean>(true)

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
        // console.log("raw api data", data)
        const first = data?.meals?.[0];
        // console.log("shaped api data", first)

        setMeal(first);
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

    return(
<></>
  );
       
}

export default Meal