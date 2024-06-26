import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: theme.spacing.sm,
  },
  backgroundStyle: {
    backgroundColor: theme.colors.surface,
  },
}))
