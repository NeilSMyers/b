import "react-native-gesture-handler"

import { StatusBar } from "expo-status-bar"

import Navigation from "./navigation/Navigation"

import ThemeProvider from "./Theme"
import StateProvider from "./State"

export default function App() {
  return (
    <StateProvider>
      <ThemeProvider>
        <StatusBar style="light" />
        <Navigation />
      </ThemeProvider>
    </StateProvider>
  )
}
