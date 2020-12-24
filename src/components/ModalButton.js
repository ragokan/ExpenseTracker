import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AddExpenseModal from "./AddExpenseModal";

const ModalButton = () => {
  const [showModal, setShowModal] = useState(false);
  const { themeColor } = useContext(ThemeContext);

  return (
    <>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color={themeColor} onClick={() => setShowModal(true)}>
          <IonIcon icon={addCircle} />
        </IonFabButton>
      </IonFab>
      <AddExpenseModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ModalButton;
