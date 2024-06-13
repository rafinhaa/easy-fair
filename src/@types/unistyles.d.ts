import { darkTheme, lightTheme } from "@/theme/themes"

type AppBreakpoints = typeof breakpoints

type AppThemes = {
  light: typeof lightTheme
  dark: typeof darkTheme
}

declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}
