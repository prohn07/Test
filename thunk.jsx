import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export let api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getuser: builder.query({
      query: (A) => ({
        url: A,
      }),
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetuserQuery } = api;
