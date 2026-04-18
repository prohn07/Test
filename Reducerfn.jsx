import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "User",
  initialState: { status: "initial", data: [], error: null },
  reducers: { Rohan },
});

export let { change } = userSlice.actions;

export default userSlice.reducer;
