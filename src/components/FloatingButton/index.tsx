import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { useStyles } from "react-native-unistyles"

import Icon, { IconProps } from "../Icon"
import { stylesheet } from "./styles"

export type FloatingButtonProps = TouchableOpacityProps & {
  icon?: IconProps["name"]
}

const FloatingButton = ({ style, children, ...rest }: FloatingButtonProps) => {
  const { styles } = useStyles(stylesheet)

  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      {rest.icon && <Icon name={rest.icon} variant="secondary" />}
      {children}
    </TouchableOpacity>
  )
}

export default FloatingButton
