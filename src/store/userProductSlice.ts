import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../interfaces/product";
interface Products {
  product: Product[];
  subtotal: number;
  error: string;
}

const initialState: Products = {
  product: [],
  subtotal: 0,
  error: null,
};

const userProductSlice = createSlice({
  name: "userProducts",
  initialState,
  reducers: {
    setProducts(state, actions) {
      const existProduct = state.product.find(
        (p) => p.id === actions.payload.id,
      );
      state.error = null;
      if (!existProduct && actions.payload.quantity) {
        state.product.push({
          ...actions.payload,
          quantity: actions.payload.quantity,
        });
      } else {
        existProduct.quantity += 1;
      }
      state.subtotal =
        Math.round(
          (state.subtotal + actions.payload.price * actions.payload?.quantity) *
            100,
        ) / 100;
    },
    deleteProduct(state, actions) {
      state.subtotal =
        Math.round(
          (state.subtotal - actions.payload.price * actions.payload.quantity) *
            100,
        ) / 100;
      state.product = state.product.filter(
        (elem: Product) => elem.id !== actions.payload.id,
      );
    },
    addTotalSum(state, actions) {
      state.subtotal =
        Math.round((state.subtotal + actions.payload.price) * 100) / 100;
      const product = state.product.find((p) => p.id === actions.payload.id);
      product.quantity += 1;
    },
    minusTotalSum(state, actions) {
      state.subtotal =
        Math.round((state.subtotal - actions.payload.price) * 100) / 100;
      const product = state.product.find((p) => p.id === actions.payload.id);
      if (product) {
        product.quantity -= 1;
      }
    },
    setError(state, actions) {
      state.error = actions.payload;
    },
  },
});

export const {
  setProducts,
  deleteProduct,
  addTotalSum,
  minusTotalSum,
  setError,
} = userProductSlice.actions;
export default userProductSlice.reducer;
