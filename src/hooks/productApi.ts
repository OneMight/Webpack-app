import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductResponse } from "../types/intefaces";
import { FiltersArray } from "../types/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      ProductResponse,
      { limit: number; skip: number; filter?: string }
    >({
      query: ({ limit, skip, filter }) =>
        `${filter ? `category/${filter}` : ""}?limit=${limit}&skip=${skip}&select=title,price,images`,
    }),
    getCategories: builder.query<FiltersArray[], string>({
      query: () => "category-list",
    }),
    getByFilter: builder.query<ProductResponse, string>({
      query: (filter) => `category/${filter}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;
