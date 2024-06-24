import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    marginBottom: theme.spacing.xl,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    borderRadius: theme.radius["3xl"],
    gap: theme.spacing.xs,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: theme.colors.primary,
  },
  buttonTab: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    alignItems: "center",
    padding: theme.spacing.xxs,
  },
  iconWrapper: {
    paddingVertical: theme.spacing.xxs,
    paddingHorizontal: theme.spacing.xs,
    borderRadius: theme.radius["3xl"],
  },
}))
