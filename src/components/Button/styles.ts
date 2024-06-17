import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  button: {
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    variants: {
      variant: {
        default: {
          backgroundColor: theme.colors.primary,
        },
        primary: {
          backgroundColor: theme.colors.primary,
        },
        secondary: {
          backgroundColor: theme.error["500"],
        },
      },
    },
  },
}))
