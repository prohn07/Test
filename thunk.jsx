import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export let api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getuser: builder.query({
      query: (A) => ({
        url: A,
        method: "GET",
      }),
      keepUnusedDataFor: 6000,
    }),
  }),
});

export const { useGetuserQuery } = api;
