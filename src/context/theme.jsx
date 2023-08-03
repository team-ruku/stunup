import React from "react";
import { useColorScheme, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemeContext = React.createContext();
const { Provider } = ThemeContext;
const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const colors = {
    light: {
      g100: "#FDFEFD",
      g200: "#F3F4F3",
      g300: "#ECEFED",
      g400: "#D8DAD8",
      g500: "#B5B8B6",
      g600: "#838684",
      g700: "#646965",
      g800: "#4C514D",
      g900: "#333834",
      g1000: "#1B201C",
      active: "#2EAB51",
      negative: "#C15556",
      bg: "#FDFEFD99",
      search: "#F3F4F399",
    },
    dark: {
      g100: "#222523",
      g200: "#191A19",
      g300: "#2C2F2D",
      g400: "#505450",
      g500: "#6F726F",
      g600: "#B5B8B6",
      g700: "#D8DAD8",
      g800: "#ECEFED",
      g900: "#F3F4F3",
      g1000: "#FDFEFD",
      active: "#2EAB51",
      negative: "#C15556",
      bg: "#22252399",
      search: "#191A1999",
    },
  }[colorScheme];

  const getHexOpacity = (hex, opacity) => {
    // opacity 0 to 100
    const hexOpacity = Math.round((opacity / 100) * 255).toString(16);
    return `${hex}${hexOpacity.length === 1 ? `0${hexOpacity}` : hexOpacity}`;
  };

  const themes = StyleSheet.create({
    shadow: {
      shadowColor: colors.g900,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.32,
      shadowRadius: 48,
    },
  });

  const fonts = StyleSheet.create({
    pageTitle: {
      fontFamily: "SUIT-Bold",
      fontSize: 24,
      lineHeight: 28,
    },
    decorative: {
      fontFamily: "SUIT-Medium",
      fontSize: 20,
      lineHeight: 24,
    },
    decorativeDesc: {
      fontFamily: "SUIT-Medium",
      fontSize: 14,
      lineHeight: 18,
    },
    sectionTitle: {
      fontFamily: "SUIT-SemiBold",
      fontSize: 16,
      lineHeight: 22,
    },
    SectionDesc: {
      fontFamily: "SUIT-Regular",
      fontSize: 14,
      lineHeight: 18,
    },
    itemTitle: {
      fontFamily: "SUIT-SemiBold",
      fontSize: 14,
      lineHeight: 18,
    },
    itemDesc: {
      fontFamily: "SUIT-Medium",
      fontSize: 12,
      lineHeight: 16,
    },
    selection: {
      fontFamily: "SUIT-Medium",
      fontSize: 16,
      lineHeight: 22,
    },
    buttonText: {
      fontFamily: "SUIT-SemiBold",
      fontSize: 14,
      lineHeight: 18,
    },
    big: {
      fontFamily: "SUIT-Bold",
      fontSize: 44,
      lineHeight: 44 * 1.2,
    },
  });

  const insets = useSafeAreaInsets();

  return (
    <Provider
      value={{ colorScheme, colors, getHexOpacity, themes, fonts, insets }}>
      {children}
    </Provider>
  );
};

export { ThemeProvider, ThemeContext };
