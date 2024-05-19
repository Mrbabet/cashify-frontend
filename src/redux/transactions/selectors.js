import { createSelector } from "@reduxjs/toolkit";

export const selectBalance = (state) => state.transactions.balance;
export const selectIncomeCategories = (state) =>
  state.transactions.incomeCategories;
export const selectExpenseCategories = (state) =>
  state.transactions.expenseCategories;
export const selectPeriodData = (state) => state.transactions.periodData;
export const selectLoading = (state) => state.transactions.loading;
export const selectError = (state) => state.transactions.error;
export const selectActiveCategory = (state) =>
  state.transactions.activeCategory;

export const selectIncomeStats = createSelector(
  (state) => state.transactions,
  (transactions) => transactions.incomeStats
);

export const selectExpenseStats = createSelector(
  (state) => state.transactions,
  (transactions) => transactions.expenseStats
);
