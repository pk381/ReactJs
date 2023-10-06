import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(data) {
  data = data.expense;
  return (
    <div className="expense-item">
      <ExpenseDate date={data.date}/>
      <ExpenseDetails expense={data}/>
    </div>
  );
}

export default ExpenseItem;
