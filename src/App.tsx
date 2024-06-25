import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts,
} from "@expo-google-fonts/roboto"
import React from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import Loading from "./components/Loading"
import { Routes } from "./routes"

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  })

  if (!fontsLoaded) return <Loading />

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Routes />
    </GestureHandlerRootView>
  )
}
