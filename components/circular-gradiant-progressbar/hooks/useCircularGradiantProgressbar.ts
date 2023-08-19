import Animated, {useSharedValue} from "react-native-reanimated";
import React, {useEffect, useState} from "react";
import {Circle} from "react-native-svg";
import UseCircularGradiantProgressbarProps from "./interfaces";
const UseCircularGradiantProgressbar = ({
  ...props
}: UseCircularGradiantProgressbarProps) => {
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const [score] = useState(props.score);
  const [indicatorRadius] = useState(props.indicatorRadius || 5);
  const [indicatorStrokeWidth] = useState(props.strokeWidth || 2);
  const [indicatorStrokeColor] = useState(
    props.indicatorStrokeColor || "white"
  );
  const [containerSize] = useState(props.containerSize + indicatorRadius + 1);
  const [strokeWidth] = useState(props.strokeWidth || 4);
  const [radius] = useState(props.containerSize / 2 - props.strokeWidth);
  const [circleLength] = useState(props.circleLength || 2 * Math.PI * radius);
  const [rotatesContainer] = useState(
    props.rotatesContainer ||
      90 -
        Math.floor(
          (Math.asin(Math.sin((containerSize * 0.285) / radius)) * 180) /
            Math.PI
        )
  );
  const [maxValue] = useState(
    props.maxValue ||
      ((Math.asin(Math.sin((containerSize * 0.285) / (radius + strokeWidth))) *
        180) /
        Math.PI /
        100) *
        2
  );

  const [duration] = useState(props.duration || 1500);

  const [strokeColor] = useState(
    [
      ["#D20000", "#FF0000"],
      ["#FFC400", "#FFF500"],
      ["#00D261", "#00FF76"],
    ] || props.strokeColor
  );

  const progress = useSharedValue(0);
  return {
    score,
    indicatorRadius,
    indicatorStrokeColor,
    indicatorStrokeWidth,
    strokeWidth,
    circleLength,
    rotatesContainer,
    AnimatedCircle,
    duration,
    strokeColor,
    progress,
    maxValue,
    containerSize,
    radius,
  };
};

export default UseCircularGradiantProgressbar;
