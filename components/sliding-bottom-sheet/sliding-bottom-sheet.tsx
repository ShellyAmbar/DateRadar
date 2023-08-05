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

const SlidingBottomSheet = ({
  children,
  isGestureEnabled = true,
  ...props
}: SlidingBottomSheetProps) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  var [showFloatingButton, setshowFloatingButton] = useState(true);

  const gesture = Gesture.Pan()

    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate((e) => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -height + 50);
      console.log(translateY.value);
    })
    .onEnd(() => {
      if (translateY.value > -height / 3) {
        translateY.value = withTiming(0, {duration: 100}, () => {
          runOnJS(setshowFloatingButton)(true);
        });
      } else if (translateY.value < -height / 1.5) {
        translateY.value = withSpring(-height + 50, {damping: 50}, () => {});
      }
    })
    .enabled(isGestureEnabled);

  const bottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [-height + 200, -height + 50],
      [25, 5],
      Extrapolate.CLAMP
    );
    return {
      transform: [{translateY: translateY.value}],
      borderRadius: borderRadius,
    };
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
