import React, {memo, useEffect, useState} from "react";
import {View, Text} from "react-native";
import Svg, {Circle} from "react-native-svg";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from "react-native-reanimated";
import createStyle from "./countdown-timer.styles";
import CountdownTimerProps from "./interfaces";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CountdownTimer = ({
  duration,
  width = 60,
  height = 60,
  onFinish,
  viewStyle,
  textStyle,
  easingType = Easing.linear,
  progressColor = "red",
  circleColor = "white",
  animateFillProgress = false,
  isCountDown = true,
  intervalDuration = 1000,
  strokeWidth = 5,
}: CountdownTimerProps) => {
  const styles = createStyle({width, height});
  const radius = width / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = useSharedValue(1);
  const [timeLeft, setTimeLeft] = useState(isCountDown ? duration : 1);

  useEffect(() => {
    progress.value = withTiming(duration, {
      duration: duration * intervalDuration,
      easing: easingType ?? Easing.linear,
    });

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (isCountDown ? prev === 1 : prev === duration) {
          clearInterval(interval);

          return isCountDown ? 0 : duration;
        }
        return isCountDown ? prev - 1 : prev + 1;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [duration]);

  useEffect(() => {
    if (isCountDown ? timeLeft === 0 : timeLeft === duration + 1) {
      onFinish();
    }
  }, [timeLeft]);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: animateFillProgress
        ? circumference - (progress.value / duration) * circumference
        : (progress.value / duration) * circumference,
    };
  });

  return (
    <View style={{...styles.container, ...viewStyle}}>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={circleColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <AnimatedCircle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          animatedProps={animatedProps}
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.textView}>
        <Text style={{...styles.text, ...textStyle}}>{timeLeft}</Text>
      </View>
    </View>
  );
};

export default memo(CountdownTimer);
