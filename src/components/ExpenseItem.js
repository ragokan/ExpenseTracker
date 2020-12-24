import { IonAvatar, IonBadge, IonButton, IonIcon, IonItem, IonLabel, IonText } from "@ionic/react";
import { trash } from "ionicons/icons";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ExpenseItem = ({ title, amount }) => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <IonItem>
      <IonAvatar slot="start" className="avatarStyle">
        <IonBadge className="badgeStyle" color={themeColor}>
          {amount}₺
        </IonBadge>
      </IonAvatar>
      <IonLabel>
        {title}
        <IonText class="dateStyle">Smt</IonText>
      </IonLabel>
      <IonButton fill="clear" slot="end">
        <IonIcon icon={trash} slot="icon-only" color={themeColor}></IonIcon>
      </IonButton>
    </IonItem>
  );
};

export default ExpenseItem;
