import {TextInputProps, TextStyle, ViewStyle} from "react-native";

type SearchItem = {
  id: string;
  name: string;
};
interface SearchBarProps extends TextInputProps {
  viewContainerStyle?: ViewStyle;
  searchbarContainerStyle?: ViewStyle;
  buttonSearchStyle?: ViewStyle;
  cancleButtonStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  onSelectResult?: (searchItem: SearchItem) => void;
  onClickSearch?: (searchTerm: string) => void;
  onPressDelete?: () => void;
  data?: SearchItem[];
  resultsContainerStyle?: ViewStyle;
  resultItemContainerStyle?: ViewStyle;
  resultItemTextStyle?: ViewStyle;
  isAutoCompleteSearch?: boolean;
  icon?: () => any;
  isCanclable?: boolean;
  debounceDelay?: number;
  onDebounce?: (text: string) => void;
}

export {SearchItem, SearchBarProps};
