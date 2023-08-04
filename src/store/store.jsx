import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import signupSlice from "./signupSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    home: homeSlice,
    signup: signupSlice,
    login: loginSlice,
  },
});

export default store;
