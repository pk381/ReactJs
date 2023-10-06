import "./ExpenseItem.css";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (data) =>{
  data = data.expense;
  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date}/>
      <ExpenseDetails expense={data}/>
    </Card>
  );
}

export default ExpenseItem;
