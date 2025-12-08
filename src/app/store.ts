import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../hooks/productApi";
import userProductSlice from "../store/userProductSlice";
import { userApi } from "../hooks/userApi";
export const store = configureStore({
  reducer: {
    userProduct: userProductSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
