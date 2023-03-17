import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  initialState: { isActive: false },
  name: "navbar",
  reducers: {
    setIsNavbarActive: (state, payload) => {
      state.isActive = payload.payload.isActive;
    },
  },
});

export const { setIsNavbarActive } = navbarSlice.actions;
export const navbarReducer = navbarSlice.reducer;
