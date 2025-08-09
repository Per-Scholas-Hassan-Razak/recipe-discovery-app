import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useCategory, useSelectedCategory } from "../contexts/context";
import { useState, useEffect } from "react";
import { fetchCategories } from "../services/apiServices";
import type { MaybeCategory, Category } from "../types";

const MealCategory = () => {
  const { categories, setCategories } = useCategory();
 const {selectedCategory, setSelectedCategory} = useSelectedCategory()
  const [isLoading, setLoading] = useState<boolean>(true);
 

  const getCategories = async () => {
    try {
      setLoading(true);
      const data = await fetchCategories();
      if (data && data.categories) {
        const options = data.categories.map((c) => c.strCategory as Category);
        setCategories(options);
        setSelectedCategory(options[0] ?? null);
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
    getCategories();
  }, []);

  return isLoading ? (
    <p>loading categories</p>
  ) : (
    <FormControl fullWidth>
      <InputLabel id="category-select-label">Category</InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={selectedCategory}
        label="Category"
        onChange={(e) => setSelectedCategory(e.target.value as MaybeCategory)}
      >
        {categories.map((cat) => (
          <MenuItem value={cat}>{cat}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MealCategory;
