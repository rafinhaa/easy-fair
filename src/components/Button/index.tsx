import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

type ButtonProps = TouchableOpacityProps & {
  variant?: "primary" | "secondary"
}

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  const { styles } = useStyles(stylesheet, { variant })

  return (
    <TouchableOpacity style={styles.button} {...rest}>
      {children}
    </TouchableOpacity>
  )
}

export default Button
