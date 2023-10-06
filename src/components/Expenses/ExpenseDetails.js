const ExpenseDetails = (data) =>{
  data = data.expense;
  return (
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <p className="expense-item__price">${data.amount}</p>
        <p className="expense-item__price">Location: {data.location}</p>
      </div>
  );
}

export default ExpenseDetails;
