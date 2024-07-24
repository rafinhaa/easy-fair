import React, { ReactNode } from "react"
import { View } from "react-native"
import { useStyles } from "react-native-unistyles"

import Icon, { IconProps } from "@/components/Icon"
import Typography from "@/components/Typography"

import { stylesheet } from "./styles"

export type SettingsIconProps = {
  label: string
  icon?: IconProps["name"]
} & (
  | {
      type?: "action"
      action: ReactNode
    }
  | {
      type?: "default"
      onDefaultAction: () => void
    }
)

const SettingsIcon = ({ label, icon, ...props }: SettingsIconProps) => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size="lg" />}
      <Typography.Text style={styles.text} size="xs">
        {label}
      </Typography.Text>
      {props.type === "action" ? (
        props.action
      ) : (
        <Icon
          name="chevron-right"
          size="lg"
          variant="secondary"
          onPress={props?.onDefaultAction}
        />
      )}
    </View>
  )
}

export default SettingsIcon
