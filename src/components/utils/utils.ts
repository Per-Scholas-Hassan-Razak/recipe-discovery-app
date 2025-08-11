import type { MealByIdProps } from "../../types";

export const extractIngredients = (meal: MealByIdProps) => {
  return Array.from({ length: 20 }, (_, i) => {
    const ing = meal[`strIngredient${i + 1}` as keyof MealByIdProps] as string | "";
    const mea = meal[`strMeasure${i + 1}` as keyof MealByIdProps] as string | "";
    return ing && ing.trim()
      ? { ingredient: ing.trim(), measure: mea?.trim() || "" }
      : null;
  }).filter(Boolean) as { ingredient: string; measure: string }[];
}