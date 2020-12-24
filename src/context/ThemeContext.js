import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

// Primary
// Secondary
// Tertiary
// Success
// Warning
// Danger
// Dark
// Medium
// Light

const ThemeContextProvider = (props) => {
  const [themeColor, setThemeColor] = useState("tertiary");
  return <ThemeContext.Provider value={{ themeColor, setThemeColor }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
