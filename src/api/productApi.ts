import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { DetailsProduct, ProductResponse } from "../interfaces/product";
import { FiltersArray, InputProductApi } from "../types/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, InputProductApi>({
      query: ({ limit, skip, filter, search }) =>
        `${filter ? `category/${filter}` : ""}${search ? `/search?q=${search}&` : "?"}limit=${limit}&skip=${skip}&select=title,price,images&`,
    }),
    getCategories: builder.query<FiltersArray[], string>({
      query: () => "category-list",
    }),
    getProductById: builder.query<DetailsProduct, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
} = productsApi;
