import commonTheme from "./common-theme"

export const lightTheme = {
  colors: {
    background: "#fff",
    primary: "#1ee631",
  },
  text: {
    default: "#000",
  },
  error: {
    "500": "#e63d1e",
  },
  ...commonTheme,
} as const

export const darkTheme = {
  colors: {
    background: "#000",
    primary: "#1ee631",
  },
  text: {
    default: "#FFF",
  },
  error: {
    "500": "#e63d1e",
  },
  ...commonTheme,
} as const
