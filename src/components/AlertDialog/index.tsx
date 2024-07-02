import React, {
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { useTranslation } from "react-i18next"
import { View } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { useStyles } from "react-native-unistyles"

import Icon, { IconProps } from "../Icon"
import Typography from "../Typography"
import AlertButtons, { AlertButtonsProps } from "./AlertButtons"
import { stylesheet } from "./styles"

export type AlertDialogProps = {
  title: string
  description?: string
  primaryAction: Required<AlertButtonsProps["primaryAction"]>
  secondaryAction?: AlertButtonsProps["secondaryAction"]
  closeOnBackdropPress?: boolean
  type?: "success" | "error" | "info" | "warning"
}

type AlertDialogRefProps = {
  show: (data: AlertDialogProps) => void
  close: () => void
}

const GlobalAlertDialog = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [alertDialogData, setAlertDialogData] =
    useState<AlertDialogProps | null>(null)

  const { styles } = useStyles(stylesheet)
  const { t } = useTranslation()

  const toastRef = useRef<AlertDialogRefProps>(null)

  const iconMapping = {
    success: "check-circle" as IconProps["name"],
    error: "alpha-x-circle" as IconProps["name"],
    info: "information" as IconProps["name"],
    warning: "alert" as IconProps["name"],
  }[alertDialogData?.type || "warning"]

  const handleShowAlertDialog = (props: AlertDialogProps) => {
    setAlertDialogData({
      ...props,
      closeOnBackdropPress: props.closeOnBackdropPress ?? true,
    })
    setIsVisible(true)
  }

  const handleCloseAlertDialog = () => {
    setIsVisible(false)
    setAlertDialogData(null)
  }

  const handleBackdropPress = () => {
    if (!alertDialogData?.closeOnBackdropPress) return

    handleCloseAlertDialog()
  }

  useImperativeHandle(toastRef, () => ({
    show: handleShowAlertDialog,
    close: handleCloseAlertDialog,
  }))

  useLayoutEffect(() => {
    AlertDialog.setAlertDialogRef(toastRef)
  }, [])

  if (!isVisible) return null

  return (
    <View testID="alert-dialog-wrapper" style={styles.wrapper}>
      <RectButton
        testID="alert-dialog-backdrop"
        style={styles.backdrop}
        onPress={handleBackdropPress}
      />
      <View style={styles.container}>
        <Icon name={iconMapping} />
        <View style={styles.content}>
          <Typography.Title>{alertDialogData?.title}</Typography.Title>
          <Typography.Text>{alertDialogData?.description}</Typography.Text>

          <AlertButtons
            primaryAction={alertDialogData?.primaryAction}
            secondaryAction={{
              label: alertDialogData?.secondaryAction?.label || t("Cancelar"),
              onPress:
                alertDialogData?.secondaryAction?.onPress ||
                handleCloseAlertDialog,
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default GlobalAlertDialog

export class AlertDialog {
  static alertDialogRef: React.RefObject<AlertDialogRefProps>

  static setAlertDialogRef(ref: React.RefObject<AlertDialogRefProps>) {
    this.alertDialogRef = ref
  }

  static show(data: AlertDialogProps) {
    this.alertDialogRef?.current?.show(data)
  }

  static close() {
    this.alertDialogRef?.current?.close()
  }
}
