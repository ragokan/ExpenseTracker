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
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import EditExpenseComponent from "../components/EditExpenseComponent";
import { ExpenseContext } from "../context/ExpenseContext";
import { ThemeContext } from "../context/ThemeContext";

const EditExpense = () => {
  const { id } = useParams();
  const { themeColor } = useContext(ThemeContext);
  const { expenses } = useContext(ExpenseContext);
  const [expense, setExpense] = useState({});
  useEffect(() => {
    setExpense(expenses.find((exp) => exp.id === parseInt(id)));
  }, [expenses, id]);

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

        <IonContent fullscreen>
          <EditExpenseComponent expense={expense} />
        </IonContent>
      </IonPage>
    </>
  );
};

export default EditExpense;
