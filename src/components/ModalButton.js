import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import React, { useState } from "react";
import AddExpenseModal from "./AddExpenseModal";

const ModalButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="tertiary" onClick={() => setShowModal(true)}>
          <IonIcon icon={addCircle} />
        </IonFabButton>
      </IonFab>
      <AddExpenseModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ModalButton;
