import { IonCard, IonCardContent, IonContent, IonLabel, IonList, IonListHeader, IonText } from "@ionic/react";
import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { ThemeContext } from "../context/ThemeContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);
  const { themeColor } = useContext(ThemeContext);

  return (
    <>
      <IonCard className="expensesCard">
        <IonCardContent>
          <IonList>
            <IonListHeader>
              <IonLabel color={themeColor}>Kazıklar</IonLabel>
            </IonListHeader>
            {expenses.length > 0 ? (
              expenses.map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  id={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              ))
            ) : (
              <div className="noExpenseText">
                <IonText color={themeColor}>Daha hiç kazık yok, neden ilk kazığını eklemiyorsun ?</IonText>
                <br />
                <IonText color={themeColor}>Kazık eklemek için sağ aşağıdaki artı butonuna tıkla.</IonText>
              </div>
            )}
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default ExpenseList;
