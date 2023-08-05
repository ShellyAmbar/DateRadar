import {TextProps} from "react-native";

export default interface TextFactoryProps extends TextProps {
  type?:
    | "error"
    | "warning"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body-text1"
    | "main-title"
    | "label";
}
