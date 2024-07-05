import {
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native-gesture-handler"
import { useStyles } from "react-native-unistyles"

import { Icon, Typography } from "@/components"

import { stylesheet } from "./styles"

export type UserCardProps = TouchableOpacityProps & {
  data: {
    name: string
    id: number
  }
  onDelete: (id: number) => Promise<void>
  onSelect: (id: number) => void
}

const UserCard = ({
  data,
  style: containerStyle,
  onDelete,
  onSelect,
  ...rest
}: UserCardProps) => {
  const { styles } = useStyles(stylesheet)

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => onSelect(data.id)}
      {...rest}
    >
      <Typography.Text size="lg" style={styles.text}>
        {data.name}
      </Typography.Text>
      <TouchableOpacity onPress={() => onDelete(data.id)} style={styles.icon}>
        <Icon name="trash-can" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default UserCard
