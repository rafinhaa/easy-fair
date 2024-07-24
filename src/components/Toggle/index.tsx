import React, { ForwardedRef, forwardRef, useImperativeHandle } from "react"
import { Pressable } from "react-native"
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

export interface ToggleProps {
  value: boolean
  onValueChange: (value: boolean) => void
}

export interface ToggleRef {
  press: () => void
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const ToggleComponent = (
  { value, onValueChange }: ToggleProps,
  ref: ForwardedRef<ToggleRef>,
) => {
  const { styles, theme } = useStyles(stylesheet)

  const backgroundColorOff = theme.text.default
  const backgroundColorOn = theme.colors.primary

  const toggleBackgroundColorOff = theme.colors.primary
  const toggleBackgroundColorOn = theme.text.default

  const translateSize =
    styles.container.width / 2 -
    styles.toggle.width / 2 +
    styles.container.paddingLeft

  const containerAnimatedBackground = useAnimatedStyle(() => ({
    backgroundColor: withTiming(
      value ? backgroundColorOn : backgroundColorOff,
      { duration: 300 },
    ),
  }))

  const switchAnimatedColor = useAnimatedStyle(() => ({
    backgroundColor: withTiming(
      value ? toggleBackgroundColorOn : toggleBackgroundColorOff,
      {
        duration: 300,
      },
    ),
    transform: [
      {
        translateX: withTiming(value ? translateSize : 0, {
          duration: 300,
        }),
      },
    ],
  }))

  useImperativeHandle(ref, () => ({
    press: () => onValueChange(!value),
  }))

  return (
    <AnimatedPressable
      style={[styles.container, containerAnimatedBackground]}
      onPress={() => onValueChange(!value)}
    >
      <Animated.View style={[styles.toggle, switchAnimatedColor]} />
    </AnimatedPressable>
  )
}

export default forwardRef(ToggleComponent)
