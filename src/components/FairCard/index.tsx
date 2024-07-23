import { useTranslation } from "react-i18next"
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { useStyles } from "react-native-unistyles"

import { Fair } from "@/@types/fair"
import { stringToFormattedDate } from "@/utils/date"

import Icon from "../Icon"
import Typography from "../Typography"
import { stylesheet } from "./styles"

export type FairCardProps = TouchableOpacityProps & {
  data: Fair
  onFairDelete: (fairId: number) => void
  onFairComplete: (fairId: number) => void
}

const FairCard = ({
  data,
  onFairComplete,
  onFairDelete,
  ...rest
}: FairCardProps) => {
  const { t } = useTranslation()

  const { styles } = useStyles(stylesheet)

  const hasPlural =
    data.fairItems > 1 ? t("fairCard.itens") : t("fairCard.item")

  const hasCompletedDate = data.completedAt

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} {...rest}>
        <View style={styles.header}>
          <Typography.Title>{data.title}</Typography.Title>
          <Typography.Text color="primary" weight="regular">
            {data.fairItems} {hasPlural}
          </Typography.Text>
        </View>
        {hasCompletedDate && (
          <View style={styles.calendar}>
            <Icon name="calendar" variant="secondary" />
            <Typography.Text color="opaque" size="sm">
              {stringToFormattedDate(data.completedAt)}
            </Typography.Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onFairDelete(data.id)}
        style={styles.iconDelete}
      >
        <Icon name="trash-can" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onFairComplete(data.id)}
        style={styles.iconComplete}
      >
        <Icon name="check" />
      </TouchableOpacity>
    </View>
  )
}

export default FairCard
