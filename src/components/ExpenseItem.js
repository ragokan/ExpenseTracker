import { IonAvatar, IonBadge, IonButton, IonIcon, IonItem, IonLabel, IonText } from "@ionic/react";
import { trash } from "ionicons/icons";
import React from "react";

const ExpenseItem = ({ title, amount }) => {
  return (
    <IonItem>
      <IonAvatar slot="start" className="avatarStyle">
        <IonBadge className="badgeStyle" color="tertiary">
          {amount}₺
        </IonBadge>
      </IonAvatar>
      <IonLabel>
        {title}
        <IonText class="dateStyle">Smt</IonText>
      </IonLabel>
      <IonButton fill="clear" slot="end">
        <IonIcon icon={trash} slot="icon-only" color="tertiary"></IonIcon>
      </IonButton>
    </IonItem>
  );
};

export default ExpenseItem;
