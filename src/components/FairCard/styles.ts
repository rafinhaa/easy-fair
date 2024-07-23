import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    paddingVertical: theme.spacing.sm,
    paddingLeft: theme.spacing.sm,
  },
  content: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calendar: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xxs,
  },
  iconComplete: {
    paddingRight: theme.spacing.sm,
  },
  iconDelete: {
    paddingRight: theme.spacing.xxs,
    paddingLeft: theme.spacing.sm,
  },
}))
