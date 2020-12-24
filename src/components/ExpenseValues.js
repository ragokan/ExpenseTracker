import { IonButton, IonCard, IonCardContent, IonDatetime, IonInput, IonItem, IonLabel } from "@ionic/react";
import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { ThemeContext } from "../context/ThemeContext";

const ExpenseValues = ({ closeModal }) => {
  const currentDate = new Date(new Date().setDate(new Date().getDate() + 1));
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState();

  const { themeColor } = useContext(ThemeContext);
  const { addNewExpense } = useContext(ExpenseContext);

  const submitForm = () => {
    const expense = {
      title: expenseTitle,
      amount: expenseAmount,
      date: selectedDate,
    };
    addNewExpense(expense);
    closeModal();
  };

  return (
    <>
      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonLabel position="floating">Kazık</IonLabel>
            <IonInput value={expenseTitle} onIonChange={(e) => setExpenseTitle(e.detail.value)} required></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Miktar</IonLabel>
            <IonInput
              type="number"
              value={expenseAmount}
              onIonChange={(e) => setExpenseAmount(e.detail.value)}
              required
            ></IonInput>
          </IonItem>
          <div className="spacer"></div>
          <IonItem>
            <IonLabel>Tarih</IonLabel>
            <IonDatetime
              displayFormat="DD/MM/YYYY"
              pickerFormat="DD MMMM YYYY"
              max={currentDate.toISOString()}
              value={selectedDate}
              onIonChange={(e) => setSelectedDate(e.detail.value)}
            ></IonDatetime>
          </IonItem>
        </IonCardContent>
      </IonCard>
      <div className="modalButtons">
        <IonButton className="expenseButton" color={themeColor} onClick={() => submitForm()}>
          Kazığı Ekle
        </IonButton>
      </div>
    </>
  );
};

export default ExpenseValues;
