import { createSlice } from "@reduxjs/toolkit";
import type { AddedProduct } from "../types/intefaces";
interface Products {
  product: AddedProduct[];
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
      if (state.product.includes(actions.payload)) {
        state.error = "You currently added this product to cart";
        return;
      }
      state.product = state.product.concat(actions.payload);
    },
    deleteProduct(state, actions) {
      state.product = state.product.filter(
        (elem: AddedProduct) => elem.id !== actions.payload,
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
    minusCount(state, actions) {
      state.product = state.product.map((elem) => {
        if (elem == actions.payload && elem.count !== 0) {
          elem.count -= 1;
        }
        return elem;
      });
    },
    plusCount(state, actions) {
      state.product = state.product.map((elem) => {
        if (elem == actions.payload) {
          elem.count += 1;
        }
        return elem;
      });
    },
  },
});

export const {
  setProducts,
  deleteProduct,
  addTotalSum,
  minusTotalSum,
  minusCount,
  plusCount,
} = userProductSlice.actions;
export default userProductSlice.reducer;
