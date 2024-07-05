import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.sm,
    backgroundColor: theme.colors.background,
  },
  emptyList: {
    flexGrow: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}))
