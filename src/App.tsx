import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts,
} from "@expo-google-fonts/roboto"
import { SQLiteProvider } from "expo-sqlite"
import React from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { GlobalAlertDialog, Loading } from "@/components"

import { initializeDatabase } from "./database/initializeDatabase"
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
    <SQLiteProvider databaseName="easy-fair.db" onInit={initializeDatabase}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
        <GlobalAlertDialog />
      </GestureHandlerRootView>
    </SQLiteProvider>
  )
}
