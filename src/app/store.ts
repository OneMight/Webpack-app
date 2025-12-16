import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../api/productApi";
import userProductSlice from "../store/userProductSlice";
import { userApi } from "../api/userApi";
import userAuthSlice from "../store/userAuthSlice";
export const store = configureStore({
  reducer: {
    userProduct: userProductSlice,
    userAuth: userAuthSlice,
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
