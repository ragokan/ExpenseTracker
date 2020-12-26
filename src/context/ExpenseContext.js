import React, { createContext, useEffect, useState } from "react";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

export const ExpenseContext = createContext();

const ExpenseContextProvider = (props) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function storageExpenses() {
      const newExpenses = await Storage.get({ key: "expenses" });
      newExpenses.value && setExpenses(JSON.parse(newExpenses.value));
    }
    storageExpenses();
  }, []);

  useEffect(() => {
    async function getFromStorage() {
      await Storage.set({
        key: "expenses",
        value: JSON.stringify(expenses),
      });
    }
    getFromStorage();
  }, [expenses]);

  const addNewExpense = (expense) => {
    const newExpense = {
      id: Math.floor(Math.random() * 17039928456),
      ...expense,
    };
    setExpenses([newExpense, ...expenses]);
  };

  const removeExpense = async (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses, addNewExpense, removeExpense }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
