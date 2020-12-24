import React from "react";
import ExpenseContextProvider from "./ExpenseContext";
import ThemeContextProvider from "./ThemeContext";

const ContextProvider = ({ children }) => {
  return (
    <>
      <ThemeContextProvider>
        <ExpenseContextProvider>{children}</ExpenseContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default ContextProvider;
