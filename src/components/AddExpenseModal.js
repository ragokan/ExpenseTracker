import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const AddExpenseModal = ({ showModal, setShowModal }) => {
  return (
    <>
      <IonContent>
        <IonModal isOpen={showModal} swipeToClose={true} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar color="tertiary">
              <IonTitle>Kazık Ekle</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>Hello</IonContent>
          <div className="modalButtons">
            <IonButton className="expenseButton" color="tertiary">
              Add Expense
            </IonButton>
          </div>
        </IonModal>
      </IonContent>
    </>
  );
};

export default AddExpenseModal;
