import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isCartOpen: false,
};

const UiSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { toggleSidebar, toggleCart } = UiSlice.actions;

export default UiSlice.reducer;
