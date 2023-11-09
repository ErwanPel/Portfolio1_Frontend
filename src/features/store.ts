import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/category";
import themeReducer from "./theme/theme";
import menuReducer from "./menuMobile/menuMobile";
import languageReducer from "./translate/translate";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    theme: themeReducer,
    menu: menuReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
