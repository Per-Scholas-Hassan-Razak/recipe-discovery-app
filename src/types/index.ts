import type { SelectChangeEvent } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

export interface ApiCategoryProp {
  categories: CategoryProp[];
}

export interface CategoryProp {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}
export type MaybeCategory = Category | "";

export interface CategoryContextProps {
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  handleCategoryChange: (e: SelectChangeEvent<string>) => void;
  currentCategory: MaybeCategory;
  setCurrentCategory: Dispatch<SetStateAction<MaybeCategory>>;
  meals:Meal[];
  setMeals:Dispatch<SetStateAction<Meal[]>>
}

export type Category =
  | "Beef"
  | "Chicken"
  | "Dessert"
  | "Lamb"
  | "Miscellaneous"
  | "Pasta"
  | "Pork"
  | "Seafood"
  | "Side"
  | "Vegan"
  | "Vegetarian"
  | "Breakfast"
  | "Goat";

//   **************************** MEALS RELATED INTERFACES ****************************

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
export interface ApiMealProp {
  meals: Meal[];
}
