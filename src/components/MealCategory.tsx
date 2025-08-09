import {  FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { useCategory } from "../contexts/context";


const MealCategory = () => {
  const { categories, handleCategoryChange, currentCategory} = useCategory();


  console.log(currentCategory)


  return (
    <FormControl fullWidth>
      <InputLabel id="category-select-label">Category</InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={currentCategory}
        label="Category"
        onChange={handleCategoryChange}
      >
        {categories.map((cat) => (
          <MenuItem value={cat}>{cat}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MealCategory;
