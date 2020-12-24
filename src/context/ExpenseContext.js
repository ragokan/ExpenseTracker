import React, { createContext, useState } from "react";

export const ExpenseContext = createContext();

const ExpenseContextProvider = (props) => {
  const [expenses, setExpenses] = useState([]);

  const addNewExpense = (expense) => {
    const newExpense = {
      id: Math.floor(Math.random() * 17039928456),
      ...expense,
    };
    setExpenses([newExpense, ...expenses]);
  };

  const removeExpense = (id) => setExpenses(expenses.filter((expense) => expense.id !== id));

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses, addNewExpense, removeExpense }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
