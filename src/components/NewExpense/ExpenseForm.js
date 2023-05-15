import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isCancel, SetIsCancel] = useState(true);
  const cancelHandler = () => {
    SetIsCancel(false);
    props.onCancel(isCancel);
  }
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    const id = Math.random().toString();
        event.preventDefault();
    const expenseData = {
            id:id,
            title: title,
            amount: amount,
            date: new Date(date)
        }
        setAmount('');
        setDate('');
      setTitle('');
      props.onSaveExpenseData(expenseData);
     
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={amountChangeHandler}
              min="10"
              step="10"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={dateChangeHandler}
              min="2019-01-01"
              max="2024-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          
        </div>
      </form>
      <button onClick={cancelHandler} >Cancel</button>
    </div>
  );
}
