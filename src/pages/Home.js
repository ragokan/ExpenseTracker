import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import ExpenseList from "../components/ExpenseList";
import ModalButton from "../components/ModalButton";
import "./Home.css";

const Home = () => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar color="tertiary" className="toolbar">
            <IonTitle className="title">Cebe Kazık</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <ExpenseList />
          <ModalButton />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
