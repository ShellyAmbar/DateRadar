import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const CardFlipAnimation = () => {
  const spin = useSharedValue<number>(0);

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

  const backAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, {duration: 500}),
        },
      ],
    };
  }, []);

  return (
    <View>
      <Animated.View style={[Styles.front, frontAnimatedStyle]}>
        <Text>Front View</Text>
      </Animated.View>
      <Animated.View style={[Styles.back, backAnimatedStyle]}>
        <Text>Back View</Text>
      </Animated.View>

      <Pressable
        onPress={() => (spin.value = spin.value ? 0 : 1)}
        style={{marginTop: 30, alignItems: "center", backgroundColor: "#FFF"}}
      >
        <Text style={{fontSize: 16}}>Flip</Text>
      </Pressable>
    </View>
  );
};

export default CardFlipAnimation;

const Styles = StyleSheet.create({
  front: {
    height: 400,
    width: 250,
    backgroundColor: "#D8D9CF",
    borderRadius: 16,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    height: 400,
    width: 250,
    backgroundColor: "#FF8787",
    borderRadius: 16,
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});
