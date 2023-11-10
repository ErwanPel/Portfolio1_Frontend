/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export type TLanguage = {
  language: "fr" | "en" | string;
};

const initialState: TLanguage = {
  language: localStorage.getItem("language") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    setEnglish: (state: TLanguage) => {
      state.language = "en";
      localStorage.setItem("language", "en");
    },
    setFrench: (state: TLanguage) => {
      state.language = "fr";
      localStorage.setItem("language", "fr");
    },
  },
});

export const { setEnglish, setFrench } = languageSlice.actions;

export default languageSlice.reducer;
