import type {
  ApiCategoryProp,
  ApiMealByIdProps,
  ApiMealProp,
  MaybeCategory,
} from "../types";

export const fetchCategories = async (signal:AbortSignal): Promise<
  ApiCategoryProp | undefined
> => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php", {signal}
    );
    if (!response.ok) {
      throw new Error("API endpoint is not responding ");
    }
    return (await response.json()) as ApiCategoryProp;
};

export const fetchMealsByCategory = async (
  category: MaybeCategory, 
  signal:AbortSignal
): Promise<ApiMealProp | undefined> => {

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`, {signal}
    );
    if (!response.ok) {
      throw new Error("API endpoint error ");
    }
    return (await response.json()) as ApiMealProp
};

export const fetchMealsById = async (
  idMeal: string,
  signal: AbortSignal
): Promise<ApiMealByIdProps> => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
    { signal }
  );
  if (!response.ok) {
    throw new Error("API endpoint failed ");
  }
  return (await response.json()) as ApiMealByIdProps;
};
