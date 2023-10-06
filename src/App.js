import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";

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
    <div>
     <h1>Welcome to The React</h1>
    <Card className="App">
      {expenses.map((item, index)=>(<ExpenseItem expense={expenses[index]} />))}
    </Card>
    </div>
  );
}

export default App;
