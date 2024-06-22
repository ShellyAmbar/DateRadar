import { ReactNode, RefAttributes } from 'react';
import { StyleProp, TextInput, TextInputProps, TextStyle, ViewProps } from 'react-native';
export interface RenderCellOptions {
  symbol: string;
  index: number;
  isFocused: boolean;
}
declare type OmitStyle<
  T extends {
    style?: any;
  },
> = Omit<T, 'style'>;
interface BaseProps {
  renderCell: (options: RenderCellOptions) => ReactNode;
  RootProps?: ViewProps;
  rootStyle?: ViewProps['style'];
  textInputStyle?: StyleProp<TextStyle>;
  cellCount?: number;
}
export interface CodeFieldProps extends BaseProps, OmitStyle<TextInputProps>, RefAttributes<TextInput> {}
