import { createSlice } from "@reduxjs/toolkit";

type Theme = {
  theme: string;
};

const initialState: Theme = {
  theme: "light" || localStorage.getItem("theme"),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLightMode: (state: Theme) => {
      state.theme = "light";
      localStorage.setItem("theme", "light");
    },
    setDarkMode: (state: Theme) => {
      state.theme = "dark";
      localStorage.setItem("theme", "dark");
    },
  },
});

export const { setLightMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
