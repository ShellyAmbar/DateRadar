import {TextStyle, ViewStyle} from "react-native";
import {CellInputType} from "./verification-code-cell-input/interfaces";

export default interface VerificationCodeInputProps {
  isValid?: boolean;
  isSuccess?: boolean;
  onComplete: (val: string) => void;
  onChangeText: (val: string) => void;
  uppercase?: boolean;
  keyboardType: KeyboardType;
  cellCount: number;
  textContentType: textInputContentType;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  errorTextStyle?: TextStyle;
  errorContainerStyle?: ViewStyle;
  isSecure?: boolean;
}

export enum KeyboardType {
  default = "default",
  number_pad = "number-pad",
  decimal_pad = "decimal-pad",
  numeric = "numeric",
  phone_pad = "phone-pad",
}

type textInputContentType =
  | "none"
  | "URL"
  | "addressCity"
  | "addressCityAndState"
  | "addressState"
  | "countryName"
  | "creditCardNumber"
  | "emailAddress"
  | "familyName"
  | "fullStreetAddress"
  | "givenName"
  | "jobTitle"
  | "location"
  | "middleName"
  | "name"
  | "namePrefix"
  | "nameSuffix"
  | "nickname"
  | "organizationName"
  | "postalCode"
  | "streetAddressLine1"
  | "streetAddressLine2"
  | "sublocality"
  | "telephoneNumber"
  | "username"
  | "password"
  | "newPassword"
  | "oneTimeCode"
  | undefined;
