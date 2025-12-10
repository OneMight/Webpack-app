import { lazy } from "react";

export const CategoriesLazy = lazy(() => {
  return import("./categoriesPage");
});
