import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logoutUser,
  createUser,
  refreshUser,
} from "./operations.js";

const initialState = {
  loading: false,
  isLoggedIn: false,
  isRefreshing: false,
  isRegistered: false,
  error: null,
  accessToken: null,
  refreshToken: null,
  id: null,
  balance: null,
  email: null,
};
const handlePending = (state) => {
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};
const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.id;
        state.isRegistered = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.balance = action.payload.user.balance;
        state.email = action.payload.user.email;
        state.id = action.payload.user.id;
      })
      .addCase(logoutUser.fulfilled, () => initialState)
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
