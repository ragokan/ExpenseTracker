import React, { useContext } from "react";
import { IonAvatar, IonBadge, IonButton, IonIcon, IonItem, IonLabel, IonText } from "@ionic/react";
import { createOutline, trash } from "ionicons/icons";
import { ThemeContext } from "../context/ThemeContext";
import { ExpenseContext } from "../context/ExpenseContext";
import moment from "moment";
import "moment/locale/tr";
import { ToastContext } from "../context/ToastContext";
moment.locale("tr");

const ExpenseItem = ({ id, title, amount, date }) => {
  const { themeColor } = useContext(ThemeContext);
  const { removeExpense } = useContext(ExpenseContext);

  const { setShowToast, setToastText } = useContext(ToastContext);

  function deleteItem() {
    setToastText("Kazıktan başarıyla kurtuldun.");
    setShowToast(true);
    removeExpense(id);
  }

  return (
    <IonItem>
      <IonItem className="mr-n1 expenseItem" routerLink={`/editExpense/${id}`}>
        <IonAvatar slot="start" className="avatarStyle">
          <IonBadge className="badgeStyle" color={themeColor}>
            {amount}₺
          </IonBadge>
        </IonAvatar>
        <IonLabel>
          {title}
          <IonText class="dateStyle">{moment(date).format("DD MMMM YYYY")}</IonText>
        </IonLabel>
      </IonItem>
      <IonButton fill="clear" slot="end" onClick={() => deleteItem()}>
        <IonIcon icon={trash} slot="icon-only" color={themeColor}></IonIcon>
      </IonButton>
    </IonItem>
  );
};

export default ExpenseItem;
