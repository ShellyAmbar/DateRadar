import {TextStyle, ViewProps} from 'react-native';

export default interface PopupProps extends ViewProps {
  isVisible:boolean;
  onBackdropPress?: () => void;
  title?: string;
  titleStyle?: TextStyle[] | TextStyle;

  onPressProcceed?: () => void;
  durationEnter?: number;
  durationExit?: number;
  valueEnter?: number;
  valueExit?: number;
  startValue?: number;
  onClickClose?: () => void;
}

