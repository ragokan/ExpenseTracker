import { IonCard, IonCardContent, IonDatetime, IonInput, IonItem, IonLabel } from "@ionic/react";
import React, { useState } from "react";

const ExpenseValues = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const currentDate = new Date(new Date().setDate(new Date().getDate() + 1));
  return (
    <>
      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonLabel position="floating">Kazık</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Miktar</IonLabel>
            <IonInput type="number"></IonInput>
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
    </>
  );
};

export default ExpenseValues;
