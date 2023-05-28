import { configureStore } from "@reduxjs/toolkit";
import UiReducer from "./feature/UISlice";
import productReducer from "./feature/productSlice";

export const store = configureStore({
  reducer: {
    UI: UiReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
