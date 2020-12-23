import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const AddExpenseModal = ({ showModal, setShowModal }) => {
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
            <IonToolbar color="tertiary">
              <IonTitle>Yeni Kazık Ekle</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCard>
              <IonCardContent></IonCardContent>
            </IonCard>
            <div className="modalButtons">
              <IonButton className="expenseButton" color="tertiary">
                Add Expense
              </IonButton>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </>
  );
};

export default AddExpenseModal;
