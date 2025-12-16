import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};
const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setIsAuth(state, actions) {
      state.isAuth = actions.payload;
    },
  },
});

export const { setIsAuth } = userAuthSlice.actions;
export default userAuthSlice.reducer;
