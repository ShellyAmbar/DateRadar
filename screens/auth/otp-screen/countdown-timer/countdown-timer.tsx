import React, {useEffect, useState} from "react";
import {View, Text, ViewStyle} from "react-native";
import Svg, {Circle, Defs, LinearGradient, Stop} from "react-native-svg";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from "react-native-reanimated";
import createStyle from "./countdown-timer.styles";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CountdownTimer: React.FC<{
  duration: number;
  width: number;
  height: number;
  viewStyle?: ViewStyle;
  onFinish: () => void;
}> = ({duration, width, height, onFinish, viewStyle}) => {
  const styles = createStyle({width, height});
  const radius = width / 2;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;

  const progress = useSharedValue(1);
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    progress.value = withTiming(duration, {
      duration: duration * 1000,
      easing: Easing.linear,
    });

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: circumference * progress.value,
    };
  });

  return (
    <View style={{...styles.container, ...viewStyle}}>
      <Svg width={radius * 2} height={radius * 2}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="pink" />
            <Stop offset="1" stopColor="red" />
            <Stop offset="1" stopColor="blue" />
          </LinearGradient>
        </Defs>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <AnimatedCircle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          animatedProps={animatedProps}
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.textView}>
        <Text style={styles.text}>{timeLeft}</Text>
      </View>
    </View>
  );
};

export default CountdownTimer;
