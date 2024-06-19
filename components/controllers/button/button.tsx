import {Text} from "react-native";
import React from "react";
import ButtonProps from "./interfaces";
import Styles from "./button.styles";
import {Box} from "../box/box";

const Button = ({
  label,
  lableStyle,
  onPress,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <Box
      disabled={disabled}
      onPress={() => !disabled && onPress()}
      style={{
        ...Styles.button,
        ...props.buttonStyle,
        ...(disabled && Styles.disabledButton),
      }}
      {...props}
    >
      <Text
        style={{
          ...Styles.text,
          ...lableStyle,
          ...(disabled && Styles.disabledText),
        }}
      >
        {label}
      </Text>
    </Box>
  );
};

export default Button;
