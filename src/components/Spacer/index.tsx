import { View } from "react-native"
import { useStyles } from "react-native-unistyles"

import commonTheme from "@/theme/common-theme"

import { stylesheet } from "./styles"

export type SpacerProps = View["props"] & {
  size?: keyof typeof commonTheme.spacing
}

const Spacer = ({ size, style: containerStyle, ...rest }: SpacerProps) => {
  const { styles } = useStyles(stylesheet, { size })

  return (
    <View
      testID="spacer"
      style={[styles.container, containerStyle]}
      {...rest}
    />
  )
}

export default Spacer
