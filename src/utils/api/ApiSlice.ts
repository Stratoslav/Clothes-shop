import { getProducts } from "./../../redux/productsSlice";
import { BASE_API } from "./../BaseApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildUrl } from "../common";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ id }) => `products/${id}`,
    }),
    getProductss: builder.query({
      query: (params) => buildUrl(`/products`, params),
      //   providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductssQuery } = apiSlice;
