import React, { useContext, useEffect, useState } from "react";
import { Plugins, Capacitor } from "@capacitor/core";
import { ThemeContext } from "./context/ThemeContext";

const { StatusBar, App } = Plugins;

const themes = [
  { name: "primary", value: "#3880ff" },
  { name: "secondary", value: "#3dc2ff" },
  { name: "tertiary", value: "#5260ff" },
  { name: "success", value: "#51b56c" },
  { name: "warning", value: "#ffc409" },
  { name: "danger", value: "#ff0d0d" },
  { name: "dark", value: "#222428" },
  { name: "medium", value: "#92949c" },
  { name: "light", value: "#f4f5f8" },
  { name: "bordo", value: "#8c0000" },
  { name: "blue", value: "#3ca1ac" },
  { name: "purple", value: "#c300ff" },
  { name: "orange", value: "#f25930" },
];

let pressCount = 0;
const AppHandler = () => {
  const { themeColor } = useContext(ThemeContext);

  useEffect(() => {
    StatusBar.setBackgroundColor({ color: themes.find((theme) => theme.name === themeColor).value });
  }, [themeColor]);

  useEffect(
    () => {
      if (Capacitor.isNative) {
        App.addListener("backButton", (_) => {
          if (window.location.pathname === "/" || window.location.pathname === "/home") {
            if (pressCount === 0) {
              pressCount = 1;
              console.log(pressCount);

              setTimeout(() => {
                pressCount = 0;
              }, 500);
            } else {
              App.exitApp();
            }
          }
        });
      }
    },
    /*eslint-disable*/ []
  );
  return <></>;
};

export default AppHandler;
