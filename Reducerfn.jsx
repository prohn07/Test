import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "user",
  initialState: { status: "initial", data: [], error: null },
  reducers: {},
});

export let { change } = userSlice.actions;

export default userSlice.reducer;
