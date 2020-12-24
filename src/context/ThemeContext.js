import React, { createContext, useEffect, useState } from "react";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

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

  useEffect(() => {
    async function storageTheme() {
      const storedTheme = await Storage.get({ key: "theme" });
      storedTheme.value && setThemeColor(storedTheme.value);
    }
    storageTheme();
  }, []);

  const setStorageTheme = async (theme) => {
    await Storage.set({ key: "theme", value: theme });
    setThemeColor(theme);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor, setStorageTheme }}>{props.children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
