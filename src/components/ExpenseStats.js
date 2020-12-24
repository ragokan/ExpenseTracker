import { IonCard, IonItem, IonLabel, IonList, IonListHeader } from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { ThemeContext } from "../context/ThemeContext";

const ExpenseStats = () => {
  const { expenses } = useContext(ExpenseContext);
  const { themeColor } = useContext(ThemeContext);

  const [stats, setStats] = useState({
    günlük: 0,
    haftalık: 0,
    aylık: 0,
    yıllık: 0,
  });

  function dateNum(dateStr) {
    return new Date(dateStr).getTime();
  }
  useEffect(() => {
    setStats({
      günlük: 0,
      haftalık: 0,
      aylık: 0,
      yıllık: 0,
    });
    expenses.length > 0 &&
      expenses.forEach((expense) => {
        if ((Date.now() - dateNum(expense.date)) / 1000 / 60 / 60 <= 24) {
          setStats((prevStats) => ({ ...prevStats, günlük: prevStats.günlük + parseInt(expense.amount) }));
        }
        if ((Date.now() - dateNum(expense.date)) / 1000 / 60 / 60 <= 168)
          setStats((prevStats) => ({ ...prevStats, haftalık: prevStats.haftalık + parseInt(expense.amount) }));
        if ((Date.now() - dateNum(expense.date)) / 1000 / 60 / 60 <= 720)
          setStats((prevStats) => ({ ...prevStats, aylık: prevStats.aylık + parseInt(expense.amount) }));
        if ((Date.now() - dateNum(expense.date)) / 1000 / 60 / 60 <= 8760)
          setStats((prevStats) => ({ ...prevStats, yıllık: prevStats.yıllık + parseInt(expense.amount) }));
      });
  }, [expenses]);
  return (
    <>
      <IonCard>
        <IonList>
          <IonListHeader>
            <IonLabel color={themeColor}>İstatistikler</IonLabel>
          </IonListHeader>
          {Object.keys(stats).map((stat, index) => (
            <IonItem key={index}>
              <IonLabel>
                {stat.charAt(0).toUpperCase() + stat.slice(1)} : {stats[stat]}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonCard>
    </>
  );
};

export default ExpenseStats;
