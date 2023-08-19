import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {
  withTiming,
  useAnimatedProps,
  useDerivedValue,
  interpolate,
} from "react-native-reanimated";
import Svg, {Circle, Text as SVGText} from "react-native-svg";
import {Defs, LinearGradient, Stop} from "react-native-svg";
import {createStyles} from "./circular-gradiant-progressbar.styles";
import {ProgressBarProps} from "./interfaces";
import UseCircularGradiantProgressbar from "./hooks/useCircularGradiantProgressbar";
import {ReText} from "react-native-redash";
const CircularGradiantProgressbar = ({...props}: ProgressBarProps) => {
  const {
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
  } = UseCircularGradiantProgressbar({...props});
  const styles = createStyles(containerSize, rotatesContainer);

  useEffect(() => {
    progress.value = withTiming(
      (maxValue * score) / 100,
      {duration: duration},
      (value) => {}
    );
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circleLength * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.round((progress.value * 100) / maxValue)}`;
  });
  const secondCircleAnimatedProps = useAnimatedProps(() => ({
    cx:
      containerSize / 2 +
      radius * Math.cos(-((circleLength * (1 - progress.value)) / radius)),
    cy:
      containerSize / 2 +
      radius * Math.sin(-((circleLength * (1 - progress.value)) / radius)),
  }));

  return (
    <View style={[styles.container]}>
      <View style={styles.textContainer}>
        <Text
          style={[styles.present, props.presentStyle && props.presentStyle]}
        >
          %
        </Text>
        <ReText
          style={[styles.progressText, props.labelStyle && props.labelStyle]}
          text={progressText}
        />
      </View>
      <View style={[styles.circlesContainer]}>
        <Svg height={containerSize} width={containerSize}>
          <Circle
            cx={containerSize / 2}
            cy={containerSize / 2}
            r={radius}
            stroke={props.staticCircleColor || "#919399"}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circleLength}
            strokeDashoffset={circleLength * (1 - maxValue)}
          />

          <Defs>
            <LinearGradient id="grad" x1="100%" y1="100%" x2="0%" y2="0%">
              <Stop
                offset="0"
                stopColor={
                  score < 70
                    ? strokeColor[0][0]
                    : score < 85
                    ? strokeColor[1][0]
                    : strokeColor[2][0]
                }
              />
              <Stop
                offset="1"
                stopColor={
                  score < 70
                    ? strokeColor[0][1]
                    : score < 85
                    ? strokeColor[1][1]
                    : strokeColor[2][1]
                }
              />
            </LinearGradient>
          </Defs>

          <AnimatedCircle
            cx={containerSize / 2}
            cy={containerSize / 2}
            r={radius}
            stroke={"url(#grad)"}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circleLength}
            animatedProps={animatedProps}
          />

          <AnimatedCircle
            cx={56 / 4}
            cy={56 / 4}
            r={indicatorRadius}
            stroke={
              score < 70
                ? strokeColor[0][0]
                : score < 85
                ? strokeColor[1][0]
                : strokeColor[2][0]
            }
            fill={indicatorStrokeColor}
            strokeWidth={indicatorStrokeWidth * 0.7}
            animatedProps={secondCircleAnimatedProps}
          />
        </Svg>
      </View>
    </View>
  );
};
export default CircularGradiantProgressbar;
