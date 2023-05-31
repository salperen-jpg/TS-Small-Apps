import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface IImage {
  url: string;
}
export interface IProduct {
  company: string;
  description: string;
  discountPercent: number;
  id: number;
  images: IImage[];
  name: string;
  price: number;
  title: string;
  amount: number;
  finalPrice: number;
}

export interface ICart {
  id: number;
  images: IImage[];
  title: string;
  amount: number;
  finalPrice: number;
}
const getLocalStorage = () => JSON.parse(localStorage.getItem("cart") || "[]");

const initialState = {
  isLoading: true,
  product: {} as IProduct,
  amount: 1,
  total: 0,
  cart: getLocalStorage(),
};

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    const response = await axios("../../data/api.json");
    return response.data.product;
  } catch (error) {
    console.log(error);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, amount, product } = action.payload;
      const specItem = state.cart.find((item: ICart) => item.id === id);
      if (specItem) {
        specItem.amount += amount;
      } else {
        const { id, title, images, finalPrice } = product;
        const newObject = {
          id,
          title,
          finalPrice,
          amount,
          images,
        };
        state.cart = [...state.cart, newObject];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    calculateTotalAmount: (state) => {
      const amount = state.cart.reduce((acc: number, currItem: ICart) => {
        return acc + currItem.amount;
      }, 0);
      state.amount = amount;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.product = payload;
      }),
      builder.addCase(getProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { addToCart, calculateTotalAmount } = productSlice.actions;

export default productSlice.reducer;
