import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { ThemeContext } from "../context/ThemeContext";
import { IonButton, IonCard, IonCardContent, IonDatetime, IonInput, IonItem, IonLabel } from "@ionic/react";

const EditExpenseComponent = ({ expense }) => {
  const currentDate = new Date(new Date().setDate(new Date().getDate() + 1));
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState();

  const [canSubmit, setCanSubmit] = useState(false);

  const { themeColor } = useContext(ThemeContext);
  const { updateExpense } = useContext(ExpenseContext);

  useEffect(() => {
    if (expense && Object.keys(expense).length < 1) return;
    setExpenseTitle(expense.title);
    setExpenseAmount(expense.amount);
    setSelectedDate(expense.date);
  }, [expense]);

  useEffect(() => {
    if (expenseTitle === "" || !expenseAmount || expenseAmount < 0) setCanSubmit(false);
    else setCanSubmit(true);
  }, [expenseAmount, expenseTitle]);

  const submitForm = () => {
    const editedExpense = {
      id: expense.id,
      title: expenseTitle,
      amount: expenseAmount,
      date: selectedDate,
    };
    updateExpense(expense.id, editedExpense);
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
        <IonButton
          className="expenseButton"
          color={themeColor}
          onClick={() => submitForm()}
          disabled={!canSubmit}
          routerLink="/home"
        >
          Kazığı Güncelle
        </IonButton>
      </div>
    </>
  );
};

export default EditExpenseComponent;
