import { View } from "react-native"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

const Home = () => {
  const { styles } = useStyles(stylesheet)

  return <View style={styles.container}></View>
}

export default Home
