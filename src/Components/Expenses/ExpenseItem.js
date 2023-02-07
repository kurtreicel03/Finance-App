import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    const newTitle = setTitle("Updated");
    console.log(newTitle);
  };
  const amount = props.expense.amount;
  const date = props.expense.date;

  const ExpenseItemComponents = (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>click me!</button>
    </Card>
  );

  return ExpenseItemComponents;
};

export default ExpenseItem;
