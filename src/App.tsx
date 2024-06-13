import { StatusBar } from "expo-status-bar"
import React from "react"
import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function App() {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
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
