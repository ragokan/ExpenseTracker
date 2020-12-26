import React, { useEffect } from "react";
import { Plugins, Capacitor } from "@capacitor/core";

const AppHandler = () => {
  useEffect(() => {
    if (Capacitor.isNative) {
      Plugins.App.addListener("backButton", (e) => {
        if (window.location.pathname === "/") {
          // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Are you sure");
          if (ans) {
            Plugins.App.exitApp();
          }
        } else if (window.location.pathname === "/home") {
          // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Are you sure");
          if (ans) {
            Plugins.App.exitApp();
          }
        }
      });
    }
  }, []);
  return <></>;
};

export default AppHandler;
