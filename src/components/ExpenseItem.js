import React, { useContext } from "react";
import { IonAvatar, IonBadge, IonButton, IonIcon, IonItem, IonLabel, IonText } from "@ionic/react";
import { trash } from "ionicons/icons";
import { ThemeContext } from "../context/ThemeContext";
import { ExpenseContext } from "../context/ExpenseContext";
import moment from "moment";
import "moment/locale/tr";
moment.locale("tr");

const ExpenseItem = ({ id, title, amount, date }) => {
  const { themeColor } = useContext(ThemeContext);
  const { removeExpense } = useContext(ExpenseContext);

  return (
    <IonItem>
      <IonAvatar slot="start" className="avatarStyle">
        <IonBadge className="badgeStyle" color={themeColor}>
          {amount}₺
        </IonBadge>
      </IonAvatar>
      <IonLabel>
        {title}
        <IonText class="dateStyle">{moment(date).format("DD MMMM YYYY - HH:mm")}</IonText>
      </IonLabel>
      <IonButton fill="clear" slot="end" onClick={() => removeExpense(id)}>
        <IonIcon icon={trash} slot="icon-only" color={themeColor}></IonIcon>
      </IonButton>
    </IonItem>
  );
};

export default ExpenseItem;
