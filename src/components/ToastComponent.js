import { IonToast } from "@ionic/react";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ToastContext } from "../context/ToastContext";

const ToastComponent = () => {
  const { showToast, setShowToast, toastText } = useContext(ToastContext);
  const { themeColor } = useContext(ThemeContext);
  return (
    <>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastText}
        position="bottom"
        duration={3000}
        color={themeColor}
      />
    </>
  );
};

export default ToastComponent;
