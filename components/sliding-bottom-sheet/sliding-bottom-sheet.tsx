import React, {useEffect, useRef, useState} from "react";
import {Box} from "../controllers/box/box";
import Styles from "./sliding-bottom-sheet.styles";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {height} from "../../styles/styles";
import FloatingButton from "../floating-button/floating-button";
import {SlidingBottomSheetProps} from "./interfaces";
import useSlidingBottomSheet from "./hooks/useSlidingBottomSheet";

const SlidingBottomSheet = ({
  children,
  isGestureEnabled = true,
  ...props
}: SlidingBottomSheetProps) => {
  const {
    gesture,
    showFloatingButton,
    setshowFloatingButton,
    translateY,
    bottomSheetStyle,
  } = useSlidingBottomSheet({
    isGestureEnabled,
  });
  return (
    <GestureDetector gesture={gesture}>
      <>
        {showFloatingButton ? (
          <FloatingButton
            onPress={() => {
              setshowFloatingButton(false);
              translateY.value = withTiming(-height / 1.5, {duration: 700});
            }}
          />
        ) : (
          <Animated.View style={[Styles.container, bottomSheetStyle]}>
            <Box style={Styles.line} />
            {children}
          </Animated.View>
        )}
      </>
    </GestureDetector>
  );
};

export default SlidingBottomSheet;
