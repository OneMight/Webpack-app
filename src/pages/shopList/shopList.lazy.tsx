import { lazy } from "react";

export const ShopListLazy = lazy(() => {
  return import("./shopList");
});
