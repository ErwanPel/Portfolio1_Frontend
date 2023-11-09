/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export type TLanguage = {
  language: "fr" | "en";
};

const initialState: TLanguage = {
  language: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    setEnglish: (state: TLanguage) => {
      state.language = "en";
    },
    setFrench: (state: TLanguage) => {
      state.language = "fr";
    },
  },
});

export const { setEnglish, setFrench } = languageSlice.actions;

export default languageSlice.reducer;
