import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducerfn";
import { api } from "./thunk";

let Store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default Store;
