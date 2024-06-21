import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    gap: theme.spacing.xxs,
  },
  input: {
    flex: 1,
    fontSize: theme.fontSize.sm,
    color: theme.text.default,
    paddingVertical: theme.spacing.xxs,
  },
}))
