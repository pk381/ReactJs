import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Food",
      amount: 10
    },
    {
      title: "Petrol",
      amount: 100
    },
    {
      title: "Movies",
      amount: 200
    }
  ];

  return (
    <div className="App">
      <h1>Welcome to The React</h1>
      <ExpenseItem title={expenses[0].title} price={expenses[0].amount}></ExpenseItem>
    </div>
  );
}

export default App;
