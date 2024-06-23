import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 24,
    height: 24,
    borderColor: theme.colors.primary,
    borderRadius: theme.radius.sm,
    variants: {
      checked: {
        true: {
          backgroundColor: theme.colors.primary,
        },
      },
    },
  },
}))
