import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  buttonItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    gap: theme.spacing.xs,
    borderColor: theme.error["500"],
    borderLeftWidth: 4,
  },
  title: {
    width: "90%",
    variants: {
      completed: {
        true: {
          textDecorationLine: "line-through",
        },
      },
    },
  },
  deleteButton: {
    flex: 1,
    justifyContent: "center",
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    backgroundColor: theme.error["500"],
  },
}))
