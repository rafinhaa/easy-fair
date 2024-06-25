import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  text: {
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
        light: {
          fontFamily: theme.fontFamily.light,
        },
        regular: {
          fontFamily: theme.fontFamily.regular,
        },
        bold: {
          fontFamily: theme.fontFamily.bold,
        },
        black: {
          fontFamily: theme.fontFamily.black,
        },
        default: {
          fontFamily: theme.fontFamily.regular,
        },
      },
    },
  },
}))
