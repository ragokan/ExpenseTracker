import React, { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Theme from "./pages/Theme";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { IonSplitPane } from "@ionic/react";
import Menu from "./components/Menu";
import { ThemeContext } from "./context/ThemeContext";
import AppHandler from "./AppHandler";
import EditExpense from "./pages/EditExpense";
import ToastComponent from "./components/ToastComponent";

import { Plugins } from "@capacitor/core";
const { SplashScreen } = Plugins;

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const { darkMode } = useContext(ThemeContext);
  return (
    <IonApp className={darkMode ? "dark-theme" : ""}>
      <AppHandler />
      <ToastComponent />
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/home" component={Home} exact={true} />
            <Route path="/theme" component={Theme} exact={true} />
            <Route path="/editExpense/:id" component={EditExpense} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
