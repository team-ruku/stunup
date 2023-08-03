import React from "react";
import { AppRegistry, StatusBar, Platform, LogBox } from "react-native";
import "react-native-gesture-handler";
import { setCustomText, setCustomTextInput } from "react-native-global-props";
import ReactNativeRecoilPersist, {
  ReactNativeRecoilPersistGate,
} from "react-native-recoil-persist";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableFreeze, enableScreens } from "react-native-screens";

import { RecoilRoot } from "recoil";

import App from "@app";
import { ThemeProvider } from "@app/context/theme";
import { log } from "@app/utils/logging";

import { name as appName } from "./app.json";

enableFreeze(true);
enableScreens(true);
LogBox.ignoreLogs([
  "Sending `onAnimatedValueUpdate` with no listeners registered.",
]);
console.disableYellowBox = [
  "Sending `onAnimatedValueUpdate` with no listeners registered.",
];

const Root = () => {
  log("REND", "INIT");

  StatusBar.setBarStyle("dark-content");
  Platform.OS === "android" && StatusBar.setBackgroundColor("transparent");
  Platform.OS === "android" && StatusBar.setTranslucent(true);

  setCustomText({
    style: {
      fontFamily: "SUIT",
      includeFontPadding: false,
    },
  });
  setCustomTextInput({
    style: {
      fontFamily: "SUIT",
      includeFontPadding: false,
    },
  });

  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ReactNativeRecoilPersistGate>
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

AppRegistry.registerComponent(appName, () => Root);
