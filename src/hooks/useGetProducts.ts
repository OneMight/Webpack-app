import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ProductResponse } from '../types/intefaces'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, string>({
      query: () => `products?limit=8&skip=10&select=title,price,images`,
    }),
  }),
})

export const { useGetProductsQuery } = productsApi