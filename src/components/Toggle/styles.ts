import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: 52,
    height: 32,
    borderRadius: theme.radius.xl,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: theme.spacing.xxs,
  },
  toggle: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
}))
