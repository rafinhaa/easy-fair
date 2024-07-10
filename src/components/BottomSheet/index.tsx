import GHBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetProps as GHBottomSheetProps,
} from "@gorhom/bottom-sheet"
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types"
import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react"
import { useStyles } from "react-native-unistyles"

import { stylesheet } from "./styles"

export type BottomSheetProps = GHBottomSheetProps & {
  initializeOpened?: boolean
}
export type BottomSheetRef = BottomSheetMethods & {
  open: () => void
}

const BottomSheet = (
  {
    children,
    snapPoints = ["50%"],
    style,
    containerStyle,
    backgroundStyle,
    initializeOpened = false,
    ...rest
  }: BottomSheetProps,
  ref: ForwardedRef<GHBottomSheet>,
) => {
  const { styles } = useStyles(stylesheet)

  const bottomSheetRef = useRef<GHBottomSheet>(null)

  useImperativeHandle(ref, () => ({
    open: () => bottomSheetRef.current?.snapToIndex(initializeOpened ? 0 : 1),
    ...bottomSheetRef.current,
  }))

  const customSnapPoints: BottomSheetProps["snapPoints"] = initializeOpened
    ? snapPoints
    : [0.01, ...(snapPoints as never)]

  return (
    <GHBottomSheet
      ref={bottomSheetRef}
      snapPoints={customSnapPoints}
      style={[styles.bottomSheet, style]}
      containerStyle={[containerStyle]}
      backgroundStyle={[styles.backgroundStyle, backgroundStyle]}
      backdropComponent={BottomSheetBackdrop}
      {...rest}
    >
      {children}
    </GHBottomSheet>
  )
}

export default forwardRef(BottomSheet)
