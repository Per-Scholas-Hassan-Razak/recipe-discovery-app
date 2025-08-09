import type { ApiCategoryProp, ApiMealProp, MaybeCategory } from "../types";


export const fetchCategories = async (): Promise<ApiCategoryProp | undefined> => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (!response.ok) {
        throw new Error("API End point ");
      }
      const data:ApiCategoryProp = await response.json();
      console.log('data', data)
      return data;

    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        console.error(e);
      }
    }
  };

  export const fetchMealsByCategory = async (category:MaybeCategory):Promise<ApiMealProp | undefined> => {
    try{
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (!response.ok) {
        throw new Error("API End point ");
      }
      const data:ApiMealProp = await response.json();
      console.log('data', data)
      return data;

    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        console.error(e);
      }
    }
  }
  
