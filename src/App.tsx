import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts,
} from "@expo-google-fonts/roboto"
import { SQLiteProvider } from "expo-sqlite"
import React, { useLayoutEffect } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { UnistylesRuntime } from "react-native-unistyles"

import { GlobalAlertDialog, Loading } from "@/components"
import { storage } from "@/storage"
import { initializeStorage, storages } from "@/storage"

import { initializeDatabase } from "./database/initializeDatabase"
import { Routes } from "./routes"

initializeStorage(storages.MMKVStorage)

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  })

  useLayoutEffect(() => {
    ;(async () => {
      const darkMode = await storage.getItem("DARK_MODE", "bool")
      if (darkMode === null) return

      UnistylesRuntime.setTheme(darkMode ? "dark" : "light")
    })()
  }, [])

  if (!fontsLoaded) return <Loading />

  return (
    <SQLiteProvider databaseName="easy-fair.db" onInit={initializeDatabase}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Routes />
          <GlobalAlertDialog />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </SQLiteProvider>
  )
}
