import {InputProps as KitInputProps} from '@ui-kitten/components';
export default interface TextInputProps extends KitInputProps {
  label: string;
  isError?: boolean;
  caption?: string;
  shownDisable?: boolean;
  disabled?: boolean;
  editable?: boolean;
}
