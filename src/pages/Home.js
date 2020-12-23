import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar color="tertiary">
          <IonTitle className="title">Cebe Kazık</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>{/* Content Here
      Content Here */}</IonContent>
    </IonPage>
  );
};

export default Home;
