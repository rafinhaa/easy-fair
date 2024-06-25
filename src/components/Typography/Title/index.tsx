import { Text as RNText, TextProps as RNTextProps } from "react-native"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

type TitleProps = RNTextProps & {
  size?: "sm" | "lg" | "xl"
  weight?: "black" | "bold" | "regular" | "light"
}

const Title = ({ children, size, style, weight, ...rest }: TitleProps) => {
  const { styles } = useStyles(stylesheet, { size, weight })

  return (
    <RNText style={[styles.text, style]} {...rest}>
      {children}
    </RNText>
  )
}

export default Title
