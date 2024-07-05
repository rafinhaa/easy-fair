import { View } from "react-native"
import { UnistylesVariants, useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

export type DividerProps = View["props"] & UnistylesVariants<typeof stylesheet>

const Divider = ({
  size,
  color,
  style: containerStyle,
  ...rest
}: DividerProps) => {
  const { styles } = useStyles(stylesheet, { size, color })

  return (
    <View
      testID="divider"
      style={[styles.container, containerStyle]}
      {...rest}
    />
  )
}

export default Divider
