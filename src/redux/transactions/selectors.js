export const selectBalance = (state) => state.transactions.balance;
export const selectIncomeStats = (state) => state.transactions.incomeStats;
export const selectExpenseStats = (state) => state.transactions.expenseStats;
export const selectIncomeCategories = (state) =>
  state.transactions.incomeCategories;
export const selectExpenseCategories = (state) =>
  state.transactions.expenseCategories;
export const selectPeriodData = (state) => state.transactions.periodData;
export const selectLoading = (state) => state.transactions.loading;
export const selectError = (state) => state.transactions.error;
