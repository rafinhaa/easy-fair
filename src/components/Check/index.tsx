import { Pressable } from "react-native"
import { useStyles } from "react-native-unistyles"

import Icon from "../Icon"
import { stylesheet } from "./styles"

export type CheckProps = {
  checked?: boolean
  disabled?: boolean

  onPressCheck: (value: boolean) => void
}

const Check = ({ checked, disabled, onPressCheck }: CheckProps) => {
  const { styles } = useStyles(stylesheet, { checked })

  const handlePressCheck = () => {
    if (disabled) return

    onPressCheck(!checked)
  }

  return (
    <Pressable
      role="checkbox"
      style={styles.container}
      onPress={handlePressCheck}
    >
      {checked && <Icon size="lg" name="check" variant="secondary" />}
    </Pressable>
  )
}

export default Check
