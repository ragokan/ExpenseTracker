import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useContext } from "react";
import ExpenseList from "../components/ExpenseList";
import ModalButton from "../components/ModalButton";
import { ThemeContext } from "../context/ThemeContext";
import "./Home.css";

const Home = () => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar color={themeColor} className="toolbar">
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
