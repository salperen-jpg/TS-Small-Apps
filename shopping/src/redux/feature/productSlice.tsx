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

interface ICart {
  id: number;
  images: IImage[];
  title: string;
  amount: number;
  finalPrice: number;
}

const initialState = {
  isLoading: true,
  product: {} as IProduct,
  amount: 1,
  total: 0,
  cart: [] as ICart[],
};

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    const response = await axios("../../data/api.json");
    return response.data.product;
  } catch (error) {}
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, amount, product } = action.payload;
      const specItem = state.cart.find((item) => item.id === id);
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
      }
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

export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
