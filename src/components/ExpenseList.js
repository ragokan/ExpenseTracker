import { IonCard, IonLabel, IonList, IonListHeader } from "@ionic/react";
import React from "react";

import data from "../data";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  return (
    <>
      <IonCard className="expensesCard">
        <IonList>
          <IonListHeader>
            <IonLabel>Kazıklar</IonLabel>
          </IonListHeader>
          {data.map((item) => (
            <ExpenseItem title={item.title} amount={item.amount} />
          ))}
        </IonList>
      </IonCard>
    </>
  );
};

export default ExpenseList;
