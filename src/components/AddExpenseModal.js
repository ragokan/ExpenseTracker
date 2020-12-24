import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ExpenseValues from "./ExpenseValues";

const AddExpenseModal = ({ showModal, setShowModal }) => {
  const { themeColor } = useContext(ThemeContext);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <IonContent>
        <IonModal
          isOpen={showModal}
          swipeToClose={true}
          onDidDismiss={() => closeModal(false)}
          className="ionModal"
          showBackdrop
        >
          <IonHeader>
            <IonToolbar color={themeColor}>
              <IonTitle>Yeni Kazık Ekle</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => closeModal(false)}>Kapat</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <ExpenseValues closeModal={closeModal} />
          </IonContent>
        </IonModal>
      </IonContent>
    </>
  );
};

export default AddExpenseModal;
