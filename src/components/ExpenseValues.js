import { IonButton, IonCard, IonCardContent, IonDatetime, IonInput, IonItem, IonLabel } from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { ThemeContext } from "../context/ThemeContext";
import { ToastContext } from "../context/ToastContext";

const ExpenseValues = ({ closeModal }) => {
  const currentDate = new Date(new Date().setDate(new Date().getDate() + 1));
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState();

  const [canSubmit, setCanSubmit] = useState(false);

  const { themeColor } = useContext(ThemeContext);
  const { addNewExpense } = useContext(ExpenseContext);
  const { setShowToast, setToastText } = useContext(ToastContext);

  const submitForm = () => {
    setToastText("Kazık başarıyla eklendi.");
    setShowToast(true);
    const expense = {
      title: expenseTitle,
      amount: expenseAmount,
      date: selectedDate,
    };
    addNewExpense(expense);
    closeModal();
  };

  useEffect(() => {
    if (expenseTitle === "" || !expenseAmount || expenseAmount < 0) setCanSubmit(false);
    else setCanSubmit(true);
  }, [expenseAmount, expenseTitle]);

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
        <IonButton className="expenseButton" color={themeColor} onClick={() => submitForm()} disabled={!canSubmit}>
          Kazığı Ekle
        </IonButton>
      </div>
    </>
  );
};

export default ExpenseValues;
