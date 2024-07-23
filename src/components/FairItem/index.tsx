import { useTranslation } from "react-i18next"
import { Pressable, PressableProps, View } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import { useStyles } from "react-native-unistyles"

import { FairItem as TFairItem } from "@/@types/fair-item"

import Check from "../Check"
import Typography from "../Typography"
import { stylesheet } from "./styles"

export type FairItemProps = PressableProps & {
  data: TFairItem

  onDeleteItem?: () => void
  completed?: boolean
}

const FairItem = ({
  data,
  completed,
  onDeleteItem,
  ...rest
}: FairItemProps) => {
  const { t } = useTranslation()
  const { styles } = useStyles(stylesheet, { completed })

  const handlePressCheck = (_value?: boolean) => {
    rest?.onPress?.(undefined)
  }

  return (
    <Swipeable
      onSwipeableOpen={onDeleteItem}
      leftThreshold={150}
      overshootLeft={false}
      renderLeftActions={() => (
        <View style={styles.deleteButton}>
          <Typography.Title>{t("fairItem.delete")}</Typography.Title>
        </View>
      )}
    >
      <Pressable style={styles.buttonItem} {...rest}>
        <Check checked={completed} onPressCheck={handlePressCheck} />
        <Typography.Title style={styles.title} numberOfLines={2}>
          {data.name}
        </Typography.Title>
      </Pressable>
    </Swipeable>
  )
}

export default FairItem
