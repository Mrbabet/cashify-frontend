import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:8000/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const createUser = createAsyncThunk(
  "auth/register",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post("auth/register", {
        email,
        password,
      });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", { email, password });

      const { accessToken, refreshToken } = response.data;

      setAuthHeader(accessToken);

      document.cookie = `refreshToken=${refreshToken}; SameSite=Strict; Secure`;

      return { accessToken, refreshToken };
    } catch (error) {
      console.error("Failed to login:", error);
      throw error;
    }
  }
);
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("auth/logout");

      console.log(axios.defaults.headers.common.Authorization);

      clearAuthHeader();

      document.cookie =
        "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure";
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const getRefreshTokenFromCookie = () => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("refreshToken="))
    ?.split("=")[1];
  return cookieValue;
};

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const refreshToken = getRefreshTokenFromCookie();

      if (!refreshToken) {
        throw new Error("Refresh token not found in cookie");
      }

      const response = await axios.post(
        "auth/refresh",
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      const newAccessToken = response.data.accessToken;

      setAuthHeader(newAccessToken);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
