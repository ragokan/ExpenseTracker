import { IonCard, IonLabel, IonList, IonListHeader } from "@ionic/react";
import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);
  return (
    <>
      <IonCard className="expensesCard">
        <IonList>
          <IonListHeader>
            <IonLabel>Kazıklar</IonLabel>
          </IonListHeader>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </IonList>
      </IonCard>
    </>
  );
};

export default ExpenseList;
