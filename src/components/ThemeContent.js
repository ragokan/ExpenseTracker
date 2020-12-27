import { IonBadge, IonItem, IonLabel, IonRadio, IonRadioGroup } from "@ionic/react";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const themes = [
  { value: "primary", title: "Mavi" },
  { value: "secondary", title: "Açık Mavi" },
  { value: "tertiary", title: "Mor" },
  { value: "success", title: "Yeşil" },
  { value: "warning", title: "Sarı" },
  { value: "danger", title: "Kırmızı" },
  { value: "dark", title: "Siyah" },
  { value: "medium", title: "Gri" },
  { value: "light", title: "Beyaz" },
  { value: "bordo", title: "Bordo" },
  { value: "blue", title: "Mavi" },
  { value: "purple", title: "Pembe" },
  { value: "orange", title: "Turuncu" },
];

const ThemeBadge = (value, text) => (
  <IonBadge className="themeBadge" color={value}>
    {text}
  </IonBadge>
);

const ThemeContent = () => {
  const { themeColor, setStorageTheme } = useContext(ThemeContext);
  return (
    <>
      <br />
      <IonRadioGroup value={themeColor} onIonChange={(e) => setStorageTheme(e.detail.value)}>
        {themes.map((theme, index) => (
          <IonItem key={index}>
            {ThemeBadge(theme.value, <IonLabel> {theme.title}</IonLabel>)}
            <IonRadio slot="start" value={theme.value} />
          </IonItem>
        ))}
      </IonRadioGroup>
    </>
  );
};

export default ThemeContent;
