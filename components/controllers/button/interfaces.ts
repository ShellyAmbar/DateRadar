import {TextStyle, ViewProps, ViewStyle} from "react-native";
export default interface ButtonProps extends ViewProps {
  label: string;
  lableStyle?: TextStyle;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  disableStyle?: ViewStyle;
  disabled?: boolean;
}
