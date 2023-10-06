import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Food",
      amount: 10,
      location: 'a',
      date: new Date()
    },
    {
      title: "Petrol",
      amount: 100,
      location: 'c',
      date: new Date()
    },
    {
      title: "Movies",
      amount: 200,
      location: 'b',
      date: new Date()
    }
  ];

  return (
    <div className="App">
      <h1>Welcome to The React</h1>
      {expenses.map((item, index)=>(<ExpenseItem expense={expenses[index]} />))}
      
    </div>
  );
}

export default App;
