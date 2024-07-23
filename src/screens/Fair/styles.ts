import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  fairDescription: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing.sm,
  },
  fairDescriptionItens: {
    color: theme.colors.primary,
  },
  listContent: {
    gap: theme.spacing.xxs,
  },
}))
