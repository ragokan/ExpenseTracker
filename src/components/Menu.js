import {
  IonContent,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonToggle,
} from "@ionic/react";

import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { colorPalette, colorPaletteOutline, home, homeOutline, moonOutline } from "ionicons/icons";
import "./Menu.css";
import { ThemeContext } from "../context/ThemeContext";

const appPages = [
  {
    title: "Kazıklar",
    url: "/home",
    iosIcon: homeOutline,
    mdIcon: home,
  },
  {
    title: "Tema",
    url: "/theme",
    iosIcon: colorPaletteOutline,
    mdIcon: colorPalette,
  },
];

const Menu = () => {
  const { darkMode, setDarkTheme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" side="end">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Cebe Kazık</IonListHeader>
          <IonNote>okanyldrmop@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? "selected" : ""}
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <IonItemDivider />
          <IonItem>
            <IonIcon slot="start" icon={moonOutline}></IonIcon>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle checked={darkMode} onClick={() => setDarkTheme(!darkMode)} />
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
