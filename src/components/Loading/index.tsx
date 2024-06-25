import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

export type LoadingProps = Omit<ActivityIndicatorProps, "color"> & {
  contentContainerStyle?: View["props"]["style"]
}

const Loading = ({ contentContainerStyle, ...rest }: LoadingProps) => {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <View
      testID="loading-container"
      style={[styles.container, contentContainerStyle]}
    >
      <ActivityIndicator
        testID="loading-indicator"
        style={styles.indicator}
        size="large"
        color={theme.colors.primary}
        {...rest}
      />
    </View>
  )
}

export default Loading
