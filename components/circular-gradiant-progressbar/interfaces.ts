import {TextStyle} from 'react-native';

interface ProgressBarProps {
  score: number;
  containerSize: number;
  strokeWidth: number;
  circleLength?: number;
  rotatesContainer?: number;
  maxValue?: number;
  strokeColor?: string[][];
  duration?: number;
  indicatorRadius?: number;
  indicatorStrokeWidth?: number;
  indicatorStrokeColor?: string;
  labelStyle?: TextStyle;
  presentStyle?: TextStyle;
  staticCircleColor?: string;
}

export {ProgressBarProps};
