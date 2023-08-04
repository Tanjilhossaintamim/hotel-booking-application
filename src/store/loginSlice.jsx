import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  token: null,
  userId: null,
  status: "initial",
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    checkLogin(state, action) {
      if (new Date(localStorage.getItem("expiredtime")) <= new Date()) {
        localStorage.removeItem("token");
        localStorage.removeItem("expiredtime");
        state.token = null;
      } else {
        state.token = localStorage.getItem("token");
      }
    },
    logout(state, action) {
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("expiredtime");
    },
    clearLoginErrorMessage(state, action) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.status = "loading";
      state.token = null;
      state.userId = null;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload.idToken;
      state.userId = action.payload.localId;
      state.status = "initial";
      state.error = null;
      localStorage.setItem("token", action.payload.idToken);
      const expiredTime = new Date(
        new Date().getTime() + action.payload.expiresIn * 1000
      );
      localStorage.setItem("expiredtime", expiredTime);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "initial";
    });
  },
});

export const { checkLogin, logout, clearLoginErrorMessage } =
  loginSlice.actions;
export default loginSlice.reducer;

const API_KEY = "AIzaSyAvEom5di4moz2LbLDA-I7gIOMrbk3hexk";

export const userLogin = createAsyncThunk(
  "login/post",
  async ({ email, password }) => {
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    try {
      const respone = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          API_KEY,
        authData
      );
      return respone.data;
    } catch (error) {
      const errorMessage = error.response.data.error.message;
      throw new Error(errorMessage);
    }
  }
);
