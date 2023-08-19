import {Pressable, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const CardFlipAnimation = ({
  frontView,

  spinVal,
}: {
  frontView: JSX.Element;

  spinVal: number;
}) => {
  const spin = useSharedValue<number>(spinVal);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, {duration: 500}),
        },
      ],
    };
  }, []);

  useEffect(() => {
    spin.value = spinVal;
  }, [spinVal]);

  return (
    <View>
      <Animated.View style={[Styles.front, frontAnimatedStyle]}>
        {frontView}
      </Animated.View>
    </View>
  );
};

export default CardFlipAnimation;

const Styles = StyleSheet.create({
  front: {},
  back: {
    // backfaceVisibility: "hidden",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
