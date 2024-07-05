import MCIcon from "@expo/vector-icons/MaterialCommunityIcons"
import { useStyles } from "react-native-unistyles"

import commonTheme from "@/theme/common-theme"

type RestProps = Omit<
  Partial<React.ComponentProps<typeof MCIcon>>,
  "size" | "color"
>

export type IconProps = RestProps & {
  size?: keyof typeof commonTheme.fontSize | number
  variant?: "primary" | "secondary"
}

const Icon = ({ size = "xl", variant = "primary", ...rest }: IconProps) => {
  const { theme } = useStyles()

  const color = {
    primary: theme.colors.primary,
    secondary: theme.text.default,
  }[variant]

  const sizes = typeof size === "number" ? size : theme.fontSize[size]

  return (
    <MCIcon {...rest} size={sizes} color={color} testID={`${rest.name}-icon`} />
  )
}

export default Icon
