import { Text as RNText, TextProps as RNTextProps } from "react-native"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

type TextProps = RNTextProps & {
  size?: "sm" | "lg" | "md" | "xs"
  color?: "opaque" | "primary"
  weight?: "black" | "light" | "bold"
}

const Text = ({ children, size, color, weight, style, ...rest }: TextProps) => {
  const { styles } = useStyles(stylesheet, { size, color, weight })

  return (
    <RNText style={[styles.text, style]} {...rest}>
      {children}
    </RNText>
  )
}

export default Text
