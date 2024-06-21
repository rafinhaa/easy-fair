import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    width: "100%",
    gap: theme.spacing.sm,
  },
  action: {
    paddingHorizontal: theme.spacing.xs,
  },
}))
