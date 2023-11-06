import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/category";
import themeReducer from "./theme/theme";
import menuReducer from "./menuMobile/menuMobile";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    theme: themeReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
