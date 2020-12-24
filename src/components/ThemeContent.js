import { IonBadge, IonItem, IonLabel, IonRadio, IonRadioGroup } from "@ionic/react";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const themes = [
  { value: "primary", title: `Primary` },
  { value: "secondary", title: `Secondary` },
  { value: "tertiary", title: `Tertiary` },
  { value: "success", title: `Success` },
  { value: "warning", title: `Warning` },
  { value: "danger", title: `Danger` },
  { value: "dark", title: `Dark` },
  { value: "medium", title: `Medium` },
  { value: "light", title: `Light` },
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
