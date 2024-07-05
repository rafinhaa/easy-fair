import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  bottomSheet: {
    padding: theme.spacing.sm,
  },
  backgroundStyle: {
    backgroundColor: theme.colors.surface,
  },
}))
