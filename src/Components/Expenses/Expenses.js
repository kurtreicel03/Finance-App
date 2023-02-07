import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedYear, setYear] = useState(new Date().getFullYear());

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.ExpenseItems.filter((expense) => {
    return expense.date.getFullYear() === +selectedYear;
  });

  let expenseItems = filteredExpenses.map((item) => {
    return <ExpenseItem key={item.id} expense={item} />;
  });

  if (expenseItems.length === 0) expenseItems = <h1>NO EXPENSE</h1>;

  const Components = (
    <Card className="expenses">
      <ExpensesFilter
        Selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseItems}
    </Card>
  );
  return Components;
};

export default Expenses;
