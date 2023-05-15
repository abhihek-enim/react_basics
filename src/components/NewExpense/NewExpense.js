import React from 'react'
import './NewExpense.css'
import AddNewExpense from './AddNewExpense';

export default function NewExpense(props) {
  const addNewExpenseHandler = (passedData) => {
    props.onAddExpenseData(passedData);
  }
  return (
    <div className='new-expense'>
      <AddNewExpense onAddNewExpense={addNewExpenseHandler} />
      
    </div>
  )
}
