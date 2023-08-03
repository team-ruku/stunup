import React from "react";
import SplashScreen from "react-native-splash-screen";

import { NavigationContainer } from "@react-navigation/native";

import { ThemeContext } from "@app/context/theme";
import { log } from "@app/utils/logging";

import Root from "./screens";

const App = () => {
  const { colors } = React.useContext(ThemeContext);
  const onLayout = () => {
    SplashScreen.hide();
    log("REND", "onLayout");
  };

  log("REND", "app");
  return (
    <NavigationContainer
      linking={{
        prefixes: ["team.ruku.stunup://"],
      }}
      theme={{
        dark: false,
        colors: {
          primary: colors.active,
          background: colors.g100,
          card: colors.g100,
          border: colors.g100,
        },
      }}
      onReady={onLayout}>
      <Root />
    </NavigationContainer>
  );
};

export default App;
