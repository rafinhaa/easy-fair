import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  text: {
    color: theme.text.default,
    variants: {
      size: {
        sm: {
          fontSize: theme.fontSize.sm,
        },
        lg: {
          fontSize: theme.fontSize.lg,
        },
        xl: {
          fontSize: theme.fontSize.xl,
        },
        default: {
          fontSize: theme.fontSize.lg,
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
          fontFamily: theme.fontFamily.bold,
        },
      },
    },
  },
}))
