import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const setInputTitle = (e) => setTitle(e.target.value);
  const setInputAmount = (e) => setAmount(e.target.value);
  const setInputDate = (e) => setDate(e.target.value);

  const submitForm = (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount,
      date,
    };
    props.OnSaveExpenseData(expenseData);
    setAmount("");
    setTitle("");
    setDate("");
  };

  const expenseForm = (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={setInputTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={setInputAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2023-12-31"
            value={date}
            onChange={setInputDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  return expenseForm;
};

export default ExpenseForm;
