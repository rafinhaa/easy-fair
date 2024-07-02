import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    marginTop: theme.spacing.md,
    flexDirection: "row",
    gap: theme.spacing.xxs,
    alignSelf: "flex-end",
  },
}))
