import React, { createContext, useState } from "react";

export const ToastContext = createContext();

const ToastContextProvider = (props) => {
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");

  return (
    <ToastContext.Provider value={{ showToast, setShowToast, toastText, setToastText }}>
      {props.children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
