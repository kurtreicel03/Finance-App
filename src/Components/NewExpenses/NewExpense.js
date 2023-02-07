import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseData = (data) => {
    const expense = {
      id: Math.random().toString(),
      ...data,
    };
    props.SaveExpenseData(expense);
  };

  const newExpense = (
    <div className="new-expense">
      <ExpenseForm OnSaveExpenseData={saveExpenseData} />
    </div>
  );
  return newExpense;
};

export default NewExpense;
