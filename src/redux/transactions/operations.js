import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addIncome = createAsyncThunk(
  "transactions/addIncome",
  async (incomeData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/transaction/income", incomeData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getIncomeStats = createAsyncThunk(
  "transactions/getIncomeStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/transaction/income");

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addExpense = createAsyncThunk(
  "transactions/addExpense",
  async (expenseData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/transaction/expense", expenseData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getExpenseStats = createAsyncThunk(
  "transactions/getExpenseStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/transaction/expense");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (transactionId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/transaction/${transactionId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getIncomeCategories = createAsyncThunk(
  "transactions/getIncomeCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/transaction/income-categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getExpenseCategories = createAsyncThunk(
  "transactions/getExpenseCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/transaction/expense-categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPeriodData = createAsyncThunk(
  "transactions/getPeriodData",
  async (date, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/transaction/period-data?date=${date}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserBalance = createAsyncThunk(
  "users/updateBalance",
  async (balance, { rejectWithValue }) => {
    try {
      const response = await axios.patch("/users/balance", { balance });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
