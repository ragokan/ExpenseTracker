import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ExpenseValues from "./ExpenseValues";

const AddExpenseModal = ({ showModal, setShowModal }) => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <>
      <IonContent>
        <IonModal
          isOpen={showModal}
          swipeToClose={true}
          onDidDismiss={() => setShowModal(false)}
          className="ionModal"
          showBackdrop
        >
          <IonHeader>
            <IonToolbar color={themeColor}>
              <IonTitle>Yeni Kazık Ekle</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Kapat</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <ExpenseValues />
            <div className="modalButtons">
              <IonButton className="expenseButton" color={themeColor}>
                Kazığı Ekle
              </IonButton>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </>
  );
};

export default AddExpenseModal;
