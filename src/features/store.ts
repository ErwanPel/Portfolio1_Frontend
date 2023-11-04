import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/category";
import themeReducer from "./theme/theme";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
