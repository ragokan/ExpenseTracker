import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonCard,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonText,
} from "@ionic/react";
import { trash } from "ionicons/icons";
import React from "react";

const ExpenseList = () => {
  return (
    <>
      <IonCard className="expensesCard">
        <IonList>
          <IonListHeader>
            <IonLabel>Kazıklar</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonAvatar slot="start">
              <IonBadge className="badgeStyle" color="tertiary">
                99
              </IonBadge>
            </IonAvatar>
            <IonLabel>
              Pokémon Yellow
              <IonText class="dateStyle">Smt</IonText>
            </IonLabel>
            <IonButton fill="clear" slot="end">
              <IonIcon icon={trash} slot="icon-only" color="tertiary"></IonIcon>
            </IonButton>
          </IonItem>
        </IonList>
      </IonCard>
    </>
  );
};

export default ExpenseList;
