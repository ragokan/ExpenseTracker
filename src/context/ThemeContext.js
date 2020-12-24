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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function storageTheme() {
      const storedTheme = await Storage.get({ key: "theme" });
      storedTheme.value && setThemeColor(storedTheme.value);

      const darkTheme = await Storage.get({ key: "darktheme" });
      darkTheme.value === "true" ? setDarkMode(true) : setDarkMode(false);
    }
    storageTheme();
  }, []);

  const setStorageTheme = async (theme) => {
    await Storage.set({ key: "theme", value: theme });
    setThemeColor(theme);
  };

  const setDarkTheme = async (mode) => {
    await Storage.set({ key: "darktheme", value: mode ? "true" : "false" });
    setDarkMode(mode);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor, setStorageTheme, darkMode, setDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
