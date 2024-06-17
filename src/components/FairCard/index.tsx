import { useTranslation } from "react-i18next"
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { useStyles } from "react-native-unistyles"

import Icon from "../Icon"
import Typography from "../Typography"
import { stylesheet } from "./styles"

export type FairCardProps = TouchableOpacityProps & {
  data: {
    title: string
    date: string
    items: number
  }
  onActionsPress?: () => void
}

const FairCard = ({ data, onActionsPress, ...rest }: FairCardProps) => {
  const { t } = useTranslation()

  const { styles } = useStyles(stylesheet)

  const hasPlural = data.items > 1 ? t("fairCard.itens") : t("fairCard.item")

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} {...rest}>
        <View style={styles.header}>
          <Typography.Title>{data.title}</Typography.Title>
          <Typography.Text color="primary" weight="medium">
            {data.items} {hasPlural}
          </Typography.Text>
        </View>
        <View style={styles.calendar}>
          <Icon name="calendar" variant="secondary" />
          <Typography.Text color="opaque" size="sm">
            {data.date}
          </Typography.Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onActionsPress} style={styles.icon}>
        <Icon name="dots-vertical" />
      </TouchableOpacity>
    </View>
  )
}

export default FairCard
