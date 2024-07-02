import { View } from "react-native"
import { useStyles } from "react-native-unistyles"

import Button from "../../Button"
import Typography from "../../Typography"
import { stylesheet } from "./styles"

type Action = {
  label: string
  onPress?: () => void
}

export type AlertButtonsProps = {
  primaryAction: Action
  secondaryAction: Action
}

const AlertButtons = ({
  primaryAction,
  secondaryAction,
}: AlertButtonsProps) => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Button variant="secondary" onPress={secondaryAction?.onPress}>
        <Typography.Text>{secondaryAction?.label}</Typography.Text>
      </Button>
      <Button onPress={primaryAction?.onPress}>
        <Typography.Text>{primaryAction?.label}</Typography.Text>
      </Button>
    </View>
  )
}

export default AlertButtons
