import {LayoutChangeEvent, TextStyle, ViewStyle} from "react-native";

export enum CellInputType {
  default = "default",
  error = "error",
  correct = "correct",
}

export default interface VerificationCodeCellProps {
  status: CellInputType;
  value: string;
  isFocused: boolean;
  onLayout: (event: LayoutChangeEvent) => void;
  numOfCells?: number;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  errorTextStyle?: TextStyle;
  errorContainerStyle?: ViewStyle;
  successTextStyle?: TextStyle;
  successContainerStyle?: ViewStyle;
  isSecure?: boolean;
}
