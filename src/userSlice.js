import { createSlice } from "@reduxjs/toolkit";

export const Userslice = createSlice({
  name: "user",
  initialState: {
    user: "KalaiVarsha@gmail.com",
  },
  reducers: {
    // signup: (state, action) => {
    //   state.user = action.payload;
    // },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { logout, login } = Userslice.actions;
export const selectUser = (state) => state.user.user;
export default Userslice.reducer;
