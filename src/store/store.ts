import { configureStore } from "@reduxjs/toolkit";

import { navbarReducer } from "./slices/navbarSlice";
import { pageReducer } from "./slices/pageSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    page: pageReducer,
  },
});
const storeState = store.getState()
export type Store = typeof storeState