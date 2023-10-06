import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Food",
      amount: 10,
      location: 'a'
    },
    {
      title: "Petrol",
      amount: 100,
      location: 'c'
    },
    {
      title: "Movies",
      amount: 200,
      location: 'b'
    }
  ];

  return (
    <div className="App">
      <h1>Welcome to The React</h1>
      {expenses.map((item, index)=>(<ExpenseItem title={expenses[index].title} price={expenses[index].amount} location={expenses[index].location}></ExpenseItem>))}
      
    </div>
  );
}

export default App;
