import "./ExpenseItem.css";

function ExpenseItem(data) {

  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <p className="expense-item__price">${data.price}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
