import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";


export default function AddNewExpense(props) {
  const [isAddNewExpense, SetIsAddNewExpense] = useState(false);
  const addNewExpenseHandler = () => {
    SetIsAddNewExpense(true);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddNewExpense(expenseData);
    };
    
   
    
    
  return (
    <div>
      <button onClick={addNewExpenseHandler}>Add New Expense</button>
          {isAddNewExpense ? (
             (<ExpenseForm
               onSaveExpenseData={saveExpenseDataHandler}
               
             />)
       
      ) : (
        <p></p>
      )}
    </div>
  );
}
