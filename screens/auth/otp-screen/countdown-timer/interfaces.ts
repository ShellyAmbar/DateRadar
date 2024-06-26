import {TextStyle, ViewStyle} from "react-native";
import {EasingFunction, EasingFunctionFactory} from "react-native-reanimated";

type CountdownTimerProps = {
  duration: number;
  width: number;
  height: number;
  viewStyle?: ViewStyle;
  onFinish: () => void;
  textStyle?: TextStyle;
  easingType?: EasingFunction | EasingFunctionFactory;
  progressColor?: string;
  circleColor?: string;
  animateFillProgress?: boolean;
  isCountDown?: boolean;
  intervalDuration?: number;
  strokeWidth?: number;
};

export default CountdownTimerProps;
