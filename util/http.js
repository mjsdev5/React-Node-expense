import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://rn-expense-d017d-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
