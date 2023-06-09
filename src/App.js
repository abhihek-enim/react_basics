import Expense from './components/Expense/Expense';
import './App.css'
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/UI/Card';
import { useState } from 'react';
function App() {
  const DUMMY_EXPENSES = [
    { id:'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id:'e2',
     title: 'New TV',
      amount: 799.49,
       date: new Date(2021, 2, 12) },
    {id:'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {id:'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenseData, setExpenseData] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (enteredData) => {
    setExpenseData((preExpenses) => {
      return [enteredData,...preExpenses]
    })    
  }
  return (
    <Card className="App">
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expense expenses={expenseData}/>
    </Card>
  );
}
export default App;
