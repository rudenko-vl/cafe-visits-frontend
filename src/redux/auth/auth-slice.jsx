import { createSlice } from "@reduxjs/toolkit";
import { login, logout, regUser, refreshUser } from "./auth-operations";

const initialState = {
  user: { name: null, email: null, admin: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthorizing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(regUser.pending, (state) => {
      state.error = null;
      state.isAuthorizing = false;
    });
    builder.addCase(regUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuthorizing = true;
    });
    builder.addCase(regUser.rejected, (state, { payload }) => {
      state.error = payload;
      state.isAuthorizing = false;
    });
    builder.addCase(login.pending, (state) => {
      state.error = null;
      state.isAuthorizing = "loading";
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuthorizing = true;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.error = payload;
      state.isAuthorizing = false;
    });
    builder.addCase(logout.pending, (state) => {
      state.error = null;
      state.isAuthorizing = "loading";
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.isAuthorizing = false;
    });
    builder.addCase(logout.rejected, (state, { payload }) => {
      state.error = payload;
      state.isAuthorizing = true;
    });
    builder.addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
      state.error = null;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
        admin: action.payload.admin,
      };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, (state, { payload }) => {
      state.isRefreshing = false;
      state.error = payload;
    });
  },
});

export default authSlice.reducer;
