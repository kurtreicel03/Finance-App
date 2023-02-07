import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  let date = props.date;
  const month = date.toLocaleDateString("en-PH", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  const expenseDate = (
    <div className="expense-date ">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );

  return expenseDate;
};

export default ExpenseDate;
