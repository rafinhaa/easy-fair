import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.sm,
  },
  newList: {
    flexDirection: "row",
    gap: theme.spacing.xxs,
    alignItems: "center",
  },
  newListText: {
    flex: 1,
  },
}))
