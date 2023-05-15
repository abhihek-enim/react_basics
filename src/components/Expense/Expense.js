import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expense(props) {
  const [year, setYear] = useState("2020");
  const filterYear = (passedYear) => {
    setYear(passedYear);
    console.log(passedYear);
  };
  const filteredExpenses = props.expenses.filter((value) => {
    return value.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter yr={year} selectedYear={filterYear} />
      {filteredExpenses.length === 0 ? (
        <p>No Expenses found</p>
      ) : (
        filteredExpenses.map((value) => {
          return (
            <ExpenseItem
              key={value.id}
              title={value.title}
              date={value.date}
              amount={value.amount}
            ></ExpenseItem>
          );
        })
      )}
      <hr />
      <hr />
      {props.expenses.map((currValue) => {
        return (
          <ExpenseItem
            key={currValue.id}
            title={currValue.title}
            date={currValue.date}
            amount={currValue.amount}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}
