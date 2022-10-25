import { createContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import type { StatusBarStyle } from "expo-status-bar";

type Theme = {
  main: string;
  secondary: string;
  text: string;
  textTwo: string;
  background: string;
  backgroundTwo: string;
  backgroundThree: string;
  statusBar: StatusBarStyle;
};

const brand = {
  sky: "#2b7de1",
  dusk: "#051c3b",
  night: "#011533",
};

const fonts: {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
} = {
  xs: 10,
  s: 12,
  m: 14,
  l: 18,
  xl: 22,
  xxl: 30,
};

const spaces: {
  no: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
} = {
  no: 0,
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 30,
};

const themes: { [key: string]: Theme } = {
  light: {
    main: brand.sky,
    secondary: brand.night,
    text: brand.night,
    textTwo: "#fff",
    background: "#fff",
    backgroundTwo: brand.night,
    backgroundThree: brand.sky,
    statusBar: "light",
  },
  dark: {
    main: brand.sky,
    secondary: brand.night,
    text: "#fff",
    textTwo: brand.night,
    background: brand.night,
    backgroundTwo: "#fff",
    backgroundThree: brand.sky,
    statusBar: "light",
  },
};

export const ThemeContext = createContext<any>({
  colors: themes.light,
  fonts,
  spaces,
});

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [fontsLoaded] = useFonts({
    reg: require("./assets/Roboto-Regular.ttf"),
    bold: require("./assets/Roboto-Bold.ttf"),
  });

  return (
    <ThemeContext.Provider
      value={{ colors: themes[theme], fonts, spaces, setTheme }}
    >
      <StatusBar style={themes[theme].statusBar} />
      {fontsLoaded && children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
