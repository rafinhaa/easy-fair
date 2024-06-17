import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  text: {
    fontWeight: theme.weights.black,
    variants: {
      size: {
        xs: {
          fontSize: theme.fontSize.xs,
        },
        sm: {
          fontSize: theme.fontSize.sm,
        },
        lg: {
          fontSize: theme.fontSize.lg,
        },
        md: {
          fontSize: theme.fontSize.md,
        },
        default: {
          fontSize: theme.fontSize.sm,
        },
      },
      color: {
        default: {
          color: theme.text.default,
        },
        opaque: {
          color: theme.colors.opaque,
        },
        primary: {
          color: theme.colors.primary,
        },
      },
      weight: {
        default: {
          fontWeight: theme.weights.light,
        },
        medium: {
          fontWeight: theme.weights.medium,
        },
        bold: {
          fontWeight: theme.weights.bold,
        },
        black: {
          fontWeight: theme.weights.black,
        },
        light: {
          fontWeight: theme.weights.light,
        },
      },
    },
  },
}))
