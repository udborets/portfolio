import { configureStore } from "@reduxjs/toolkit";

import { pageReducer } from "./slices/pageSlice";
import { navbarReducer } from "./slices/navbarSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    page: pageReducer,
  },
});
const storeState = store.getState()
export type Store = typeof storeState