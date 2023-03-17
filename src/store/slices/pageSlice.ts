import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  initialState: { current: "" },
  name: "page",
  reducers: {
    setCurrentPage: (state, payload) => {
      state.current = payload.payload.current;
    },
  },
});

export const { setCurrentPage } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
