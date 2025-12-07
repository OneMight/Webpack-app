import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../types/intefaces";
interface Products {
  product: Product[];
  subtotal: number;
}

const initialState: Products = {
  product: [],
  subtotal: 0,
};

const userProductSlice = createSlice({
  name: "userProducts",
  initialState,
  reducers: {
    setProducts(state, actions) {
      state.product = state.product.concat(actions.payload);
    },
    deleteProduct(state, actions) {
      state.product = state.product.filter(
        (elem: Product) => elem.id !== actions.payload,
      );
    },
    addTotalSum(state, actions) {
      state.subtotal =
        Math.round((state.subtotal + actions.payload) * 100) / 100;
    },
    minusTotalSum(state, actions) {
      state.subtotal =
        Math.round((state.subtotal - actions.payload) * 100) / 100;
    },
  },
});

export const { setProducts, deleteProduct, addTotalSum, minusTotalSum } =
  userProductSlice.actions;
export default userProductSlice.reducer;
