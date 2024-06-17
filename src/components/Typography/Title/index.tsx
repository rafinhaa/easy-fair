import { Text as RNText, TextProps as RNTextProps } from "react-native"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

type TitleProps = RNTextProps & {
  size?: "sm" | "lg" | "xl"
}

const Title = ({ children, size, style, ...rest }: TitleProps) => {
  const { styles } = useStyles(stylesheet, { size })

  return (
    <RNText style={[styles.text, style]} {...rest}>
      {children}
    </RNText>
  )
}

export default Title
