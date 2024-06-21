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

  const RenderContent: React.FC = () => {
    if (props.type === "action") {
      return <>{props.action}</>
    } else {
      return (
        <Icon
          name="chevron-right"
          size="lg"
          variant="secondary"
          onPress={props.onDefaultAction}
        />
      )
    }
  }

  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size="lg" />}
      <Typography.Text style={styles.text} size="xs">
        {label}
      </Typography.Text>
      <RenderContent />
    </View>
  )
}

export default SettingsIcon
