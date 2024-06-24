import { View } from "react-native"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

export type ProfileProps = {}

const Profile = (_props: ProfileProps) => {
  const { styles } = useStyles(stylesheet)

  return <View style={styles.container}></View>
}

export default Profile
