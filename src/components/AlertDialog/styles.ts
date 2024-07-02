import { StyleSheet } from "react-native"
import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    elevation: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    gap: theme.spacing.sm,
    flexDirection: "row",
    width: "90%",
  },
  content: {
    flex: 1,
  },
}))
