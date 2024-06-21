import { PropsWithChildren } from "react"
import { View } from "react-native"
import { useStyles } from "react-native-unistyles"

import Typography from "../../Typography"
import { stylesheet } from "./styles"

export type SettingsSectionProps = PropsWithChildren & {
  title: string
}

const SettingsSection = ({ title, children }: SettingsSectionProps) => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Typography.Title>{title}</Typography.Title>
      {children}
    </View>
  )
}

export default SettingsSection
