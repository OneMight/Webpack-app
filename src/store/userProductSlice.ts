import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../types/intefaces";
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
      const exists = state.product.some((p) => p.id === actions.payload.id);
      state.error = null;
      if (!exists) {
        state.product.push(actions.payload);
        state.subtotal =
          Math.round((state.subtotal + actions.payload.price) * 100) / 100;
      } else {
        state.error = "This item is already in the cart";
      }
    },
    clearError(state) {
      state.error = null;
    },
    deleteProduct(state, actions) {
      state.product = state.product.filter(
        (elem: Product) => elem.id !== actions.payload,
      );
    },
    addTotalSum(state, actions) {
      const exists = state.product.some((p) => p.price === actions.payload);
      if (!exists) {
        state.subtotal =
          Math.round((state.subtotal + actions.payload) * 100) / 100;
      }
    },
    minusTotalSum(state, actions) {
      state.subtotal =
        Math.round((state.subtotal - actions.payload) * 100) / 100;
    },
  },
});

export const {
  setProducts,
  deleteProduct,
  addTotalSum,
  minusTotalSum,
  clearError,
} = userProductSlice.actions;
export default userProductSlice.reducer;
