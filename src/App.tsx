import { StatusBar } from "expo-status-bar"
import React from "react"
import { useTranslation } from "react-i18next"
import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function App() {
  const { t } = useTranslation()

  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("startingMessage")}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.text.default,
  },
}))
