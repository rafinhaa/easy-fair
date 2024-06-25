import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    position: "absolute",
    bottom: 50,
    right: 20,
    width: 54,
    height: 54,
    borderRadius: theme.radius.md,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    zIndex: 1,
  },
}))
