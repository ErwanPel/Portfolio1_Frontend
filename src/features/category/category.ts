/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export type TChoice = {
  choice: null | "about Me" | "projects" | "resources" | "courses" | "contacts";
};

const initialState: TChoice = {
  choice: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    goToHome: (state: TChoice) => {
      state.choice = null;
    },
    goToAboutMe: (state: TChoice) => {
      state.choice = "about Me";
    },
    goToProjects: (state: TChoice) => {
      state.choice = "projects";
    },
    goToResources: (state: TChoice) => {
      state.choice = "resources";
    },
    goToCourse: (state: TChoice) => {
      state.choice = "courses";
    },
    goToContacts: (state: TChoice) => {
      state.choice = "contacts";
    },
  },
});

export const {
  goToHome,
  goToAboutMe,
  goToContacts,
  goToCourse,
  goToProjects,
  goToResources,
} = categorySlice.actions;

console.log("ici", categorySlice.reducer);

export default categorySlice.reducer;
