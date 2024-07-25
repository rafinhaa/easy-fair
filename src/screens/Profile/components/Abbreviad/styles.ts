import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: 150,
    height: 150,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    alignSelf: "center",
  },
  initialLetters: {
    fontFamily: theme.fontFamily.black,
    color: theme.text.default,
    textTransform: "uppercase",
    variants: {
      size: {
        default: {
          fontSize: 100,
        },
        oneLetter: {
          fontSize: 140,
        },
      },
    },
  },
}))
