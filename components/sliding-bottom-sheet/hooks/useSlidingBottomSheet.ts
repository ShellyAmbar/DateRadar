import {View, Text} from "react-native";
import React, {useEffect, useState} from "react";
import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {Gesture} from "react-native-gesture-handler";
import {height} from "@traveloffline/styles/styles";
import {UseSlidingBottomSheet} from "./interfaces";

const useSlidingBottomSheet = ({
  isGestureEnabled = true,
  ...props
}: UseSlidingBottomSheet) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  const [showFloatingButton, setshowFloatingButton] = useState(false);

  useEffect(() => {
    translateY.value = withTiming(-height / 1.5, {duration: 700});
  }, []);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate((e) => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -height + 50);
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

  return {
    showFloatingButton,
    gesture,
    translateY,
    bottomSheetStyle,
    setshowFloatingButton,
  };
};

export default useSlidingBottomSheet;
