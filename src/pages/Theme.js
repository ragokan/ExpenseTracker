import { IonBackButton, IonButtons } from "@ionic/react";
import { IonMenuButton } from "@ionic/react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useContext } from "react";
import ThemeContent from "../components/ThemeContent";

import { ThemeContext } from "../context/ThemeContext";
import "./Theme.css";

const Home = ({ history }) => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar color={themeColor}>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonButtons slot="end">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Kazık Temaları</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <ThemeContent />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
