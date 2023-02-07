import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import "./Components/Expenses/Expenses.css";
import NewExpense from "./Components/NewExpenses/NewExpense";

const expenses_data = [
  {
    id: 1,
    title: "ROG STRIX 4090",
    amount: 140000,
    date: new Date(2022, 1, 28),
  },
  {
    id: 2,
    title: "ROG STRIX Z790 FORMULA",
    amount: 45000,
    date: new Date(2023, 1, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(expenses_data);

  const addExpenseData = (expense) => {
    expense.date = new Date(expense.date);
    setExpenses([expense, ...expenses]);
  };

  const Components = (
    <div>
      <NewExpense SaveExpenseData={addExpenseData} />
      <Expenses ExpenseItems={expenses} />
    </div>
  );

  return Components;
}

export default App;
