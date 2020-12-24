import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import { IonMenuButton } from "@ionic/react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
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
          <IonToolbar color={themeColor} className="toolbar">
            <IonButton fill="clear" slot="start" onClick={() => history.push("/home")}>
              <IonIcon icon={arrowBackOutline} slot="icon-only" color={themeColor === "light" ? "dark" : "light"}></IonIcon>
            </IonButton>
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
