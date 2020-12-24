import React from "react";
import ThemeContextProvider from "./ThemeContext";

const ContextProvider = ({ children }) => {
  return (
    <>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </>
  );
};

export default ContextProvider;
