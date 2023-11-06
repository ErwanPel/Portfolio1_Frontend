import { createSlice } from "@reduxjs/toolkit";

type Menu = {
  openMenu: boolean;
};

const initialState: Menu = {
  openMenu: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setOpenMenu: (state: Menu) => {
      state.openMenu = true;
    },
    setCloseMenu: (state: Menu) => {
      state.openMenu = false;
    },
  },
});

export const { setOpenMenu, setCloseMenu } = menuSlice.actions;
export default menuSlice.reducer;
