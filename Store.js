import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducerfn";
import { api } from "./thunk";

let Store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
});

export default Store;
