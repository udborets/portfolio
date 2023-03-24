import { configureStore } from "@reduxjs/toolkit";

import { navbarReducer } from "./slices/navbarSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});
const storeState = store.getState();
export type Store = typeof storeState;
