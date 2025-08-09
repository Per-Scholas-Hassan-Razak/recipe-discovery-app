import { useState, type ReactNode } from "react";
import { CategoryContext } from "../contexts/context";
import type { Category } from "../types";

const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
