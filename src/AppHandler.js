import React, { useEffect } from "react";
import { Plugins, Capacitor } from "@capacitor/core";

const AppHandler = () => {
  useEffect(() => {
    if (Capacitor.isNative) {
      Plugins.App.addListener("backButton", (_) => {
        if (window.location.pathname === "/") Plugins.App.exitApp();
        else if (window.location.pathname === "/home") Plugins.App.exitApp();
      });
    }
  }, []);
  return <></>;
};

export default AppHandler;
