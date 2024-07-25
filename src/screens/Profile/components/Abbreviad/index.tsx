import { Text, View } from "react-native"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

export type AbbreviadProps = {
  name: string
}

const Abbreviad = ({ name }: AbbreviadProps) => {
  const isOneLetter = name.split(" ").length === 1

  const { styles } = useStyles(stylesheet, {
    size: isOneLetter ? "oneLetter" : undefined,
  })

  const initialLetters = name
    .split(" ")
    .map((name, index) => {
      if (index === 0 || index === 1) return name[0]
      return ""
    })
    .filter((letter) => letter !== "")
    .join("")

  return (
    <View style={styles.container}>
      <Text style={styles.initialLetters}>{initialLetters}</Text>
    </View>
  )
}

export default Abbreviad
