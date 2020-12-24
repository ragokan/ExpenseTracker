import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import ExpenseList from "../components/ExpenseList";
import ModalButton from "../components/ModalButton";
import "./Home.css";

const Home = () => {
  return (
    <>
      <IonPage>
        <IonToolbar color="tertiary" className="toolbar">
          <IonHeader collapse="condense">
            <IonTitle className="title">Cebe Kazık</IonTitle>
          </IonHeader>
        </IonToolbar>
        <IonContent fullscreen>
          <ExpenseList />
          <ModalButton />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
