import {
  ScrollViewProps,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from "react-native";

export type boxProps = ViewProps &
  TouchableOpacityProps &
  ScrollViewProps & {
    scroll?: boolean;
    horizontal?: boolean;
    ref?: any;
    withoutFeedback?: boolean;
    contentContainerStyle?: ViewStyle;
  };
