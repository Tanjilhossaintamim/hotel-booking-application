import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  message: "",
  errmessage: "",
};

const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    removeSignupError(state, action) {
      state.errmessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignup.pending, (state, action) => {
      state.loading = true;
      state.message = "";
      state.errmessage = "";
    });
    builder.addCase(userSignup.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "SignUp Successfully !";
      state.errmessage = "";
    });
    builder.addCase(userSignup.rejected, (state, action) => {
      state.loading = false;
      state.errmessage = action.error.message;
      state.message = "";
    });
  },
});
export const { removeSignupError } = signUpSlice.actions;
export default signUpSlice.reducer;
const API_KEY = "AIzaSyAvEom5di4moz2LbLDA-I7gIOMrbk3hexk";

export const userSignup = createAsyncThunk(
  "signup/post",
  async ({ email, password }) => {
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          API_KEY,
        authData
      );
      return response.data;
    } catch (error) {
      const errorMessage = error.response.data.error.message;
      throw new Error(errorMessage);
    }
  }
);
