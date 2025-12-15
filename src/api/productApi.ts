import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IReviewProduct } from "../components/review/review";
import type { Product } from "../types/intefaces";

interface IDimensionsProduct {
  width: number;
  height: number;
  depth: number;
}
type InputProductApi = {
  limit: number;
  skip: number;
  filter?: string;
  search?: string;
};

interface ProductResponse {
  products: Product[];
  total: number;
}

export type FiltersArray = {
  id: number;
  elem: string;
};
export interface IDetailsProduct extends Product {
  description: string;
  rating: number;
  category: string;
  brand: string;
  weight: number;
  dimensions: IDimensionsProduct;
  shippingInformation: string;
  returnPolicy: string;
  reviews: IReviewProduct[];
}

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
    getProductById: builder.query<IDetailsProduct, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
} = productsApi;
