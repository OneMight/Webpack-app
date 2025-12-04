import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../types/intefaces";
interface Products {
  product: Product[];
}

const initialState: Products = {
  product: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, actions) {
      state.product = actions.payload.products;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
