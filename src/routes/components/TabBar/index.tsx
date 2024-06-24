import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

export type TabBarProps = BottomTabBarProps

const TabBar = (props: TabBarProps) => {
  const { styles, theme } = useStyles(stylesheet)
  const { navigation } = props

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {props.state.routes.map((route, index) => {
          const { options } = props.descriptors[route.key]

          const isFocused = props.state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            })
          }

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <View style={styles.buttonContent}>
                <View
                  style={[
                    styles.iconWrapper,
                    {
                      backgroundColor: isFocused
                        ? theme.colors.surface
                        : "transparent",
                    },
                  ]}
                >
                  {options.tabBarIcon({
                    focused: isFocused,
                    color: "primary",
                    size: 34,
                  })}
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

export default TabBar
