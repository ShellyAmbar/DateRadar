import {TextStyle, ViewStyle} from "react-native";

type SearchItemProps = {
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  text?: string;
};
export default SearchItemProps;
