import React from "react";
import ExpenseContextProvider from "./ExpenseContext";
import ThemeContextProvider from "./ThemeContext";
import ToastContextProvider from "./ToastContext";

const ContextProvider = ({ children }) => {
  return (
    <>
      <ThemeContextProvider>
        <ExpenseContextProvider>
          <ToastContextProvider> {children} </ToastContextProvider>
        </ExpenseContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default ContextProvider;
