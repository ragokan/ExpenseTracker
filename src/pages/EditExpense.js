import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import { useParams } from "react-router";
import { ThemeContext } from "../context/ThemeContext";

const EditExpense = () => {
  const { id } = useParams();
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
            <IonTitle>Kazığı Güncelle</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen></IonContent>
      </IonPage>
    </>
  );
};

export default EditExpense;
