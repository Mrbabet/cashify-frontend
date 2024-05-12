import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser, logoutUser, refreshUser } from "./operations";

const initialState = {
  user: { email: null },
  accessToken: null,
  refreshToken: null, // Add field for refresh token
  isLoggedIn: false,
  isRefreshing: false,
  errMsg: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.errMsg = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user, accessToken, refreshToken } = action.payload;
        state.user = user;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.isLoggedIn = true;
        state.errMsg = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.errMsg = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.errMsg = null;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.isRefreshing = false;
        state.errMsg = null;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const { clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;
