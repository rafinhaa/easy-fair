import { TextInput, TextInputProps, View } from "react-native"
import { useStyles } from "react-native-unistyles"

import Icon, { IconProps } from "../Icon"
import { stylesheet } from "./styles"

type InputProps = TextInputProps & {
  icon?: IconProps["name"]
  contentContainerStyle?: View["props"]["style"]
}

const Input = ({ contentContainerStyle, ...rest }: InputProps) => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={[styles.container, contentContainerStyle]}>
      {rest.icon && <Icon name={rest.icon} />}
      <TextInput style={styles.input} clearButtonMode="always" {...rest} />
    </View>
  )
}

export default Input
