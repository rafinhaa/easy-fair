import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  text: {
    color: theme.text.default,
    fontWeight: theme.weights.black,
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
          fontSize: theme.fontSize.sm,
        },
      },
    },
  },
}))
