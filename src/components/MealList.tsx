import {  List, ListItem, ListItemText } from "@mui/material"
import { useCategory } from "../contexts/context"

const MealList = () => {
    const {meals} = useCategory()
    return (
        <List>
{meals.map((m) => 
    <ListItem>
        <ListItemText>{m.idMeal}</ListItemText>
        <ListItemText>{m.strMeal}</ListItemText>
        <ListItemText>{m.strMealThumb}</ListItemText>
    </ListItem>

)}
        </List>
    )
}

export default MealList