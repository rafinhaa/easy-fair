import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    variants: {
      size: {
        default: {
          height: 1,
        },
        xxxxs: {
          height: 1,
        },
        xxxs: {
          height: 2,
        },
        xxs: {
          height: theme.spacing.xxs,
        },
        xs: {
          height: theme.spacing.xs,
        },
        sm: {
          height: theme.spacing.sm,
        },
        md: {
          height: theme.spacing.md,
        },
        lg: {
          height: theme.spacing.lg,
        },
        xl: {
          height: theme.spacing.xl,
        },
        ["2xl"]: {
          height: theme.spacing["2xl"],
        },
        ["3xl"]: {
          height: theme.spacing["3xl"],
        },
      },
      color: {
        default: {
          backgroundColor: theme.colors.primary,
        },
        primary: {
          backgroundColor: theme.colors.primary,
        },
        opaque: {
          backgroundColor: theme.colors.opaque,
        },
        surface: {
          backgroundColor: theme.colors.surface,
        },
        background: {
          backgroundColor: theme.colors.background,
        },
      },
    },
  },
}))
