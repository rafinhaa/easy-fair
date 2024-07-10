import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

type ButtonProps = TouchableOpacityProps & {
  variant?: "primary" | "secondary"
}

const Button = ({
  children,
  variant,
  style: containerStyle,
  ...rest
}: ButtonProps) => {
  const { styles } = useStyles(stylesheet, { variant })

  return (
    <TouchableOpacity style={[styles.button, containerStyle]} {...rest}>
      {children}
    </TouchableOpacity>
  )
}

export default Button
