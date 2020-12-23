import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import React from "react";
import ExpenseList from "../components/ExpenseList";
import "./Home.css";

const Home = () => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar color="tertiary" className="toolbar">
          <IonTitle className="title">Cebe Kazık</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExpenseList />

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="tertiary">
            <IonIcon icon={addCircle} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
