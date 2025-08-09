import { useEffect, useState, type ReactNode } from "react";
import { CategoryContext } from "../contexts/context";
import type { Category, MaybeCategory } from "../types";
import { fetchCategories } from "../services/apiServices";
import type { SelectChangeEvent } from "@mui/material";

const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [currentCategory, setCurrentCategory] = useState<MaybeCategory>("");

  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    setCurrentCategory(e.target.value as MaybeCategory);
  };

  const getCategories = async () => {
    try {
      setLoading(true);
      const data = await fetchCategories();
      if (data && data.categories) {
        const options = (data.categories.map((c) => c.strCategory as Category));
        setCategories(options)
        setCurrentCategory(options[0] ?? null)
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

  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, isLoading, setLoading, currentCategory,setCurrentCategory,handleCategoryChange }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
