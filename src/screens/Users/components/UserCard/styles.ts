import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },
  text: {
    flex: 1,
  },
  icon: {
    padding: theme.spacing.xs,
  },
}))
