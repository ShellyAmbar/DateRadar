import {Text, ActivityIndicator} from "react-native";
import React, {useEffect, useState} from "react";
import ButtonProps from "./interfaces";
import Styles from "./button.styles";
import {Box} from "../box/box";
import {LinearGradient} from "expo-linear-gradient";
import {GlobalColors} from "@traveloffline/styles/global-colors";
const Button = ({
  label,
  lableStyle,
  onPress,
  disabled = false,
  isGradiant = false,
  ...props
}: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const onButtonPressed = () => {
    setIsLoading(true);
    !disabled && onPress();
  };
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading]);

  return (
    <Box
      withoutFeedback
      disabled={disabled}
      onPress={() => {
        onButtonPressed();
      }}
      style={{
        ...Styles.button,
        ...props.buttonStyle,
        ...(disabled && Styles.disabledButton),
      }}
      {...props}
    >
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={GlobalColors.Border}
          style={{
            alignSelf: "center",
            position: "absolute",
            zIndex: 3,
          }}
        />
      )}
      {isGradiant && !disabled && (
        <LinearGradient
          colors={[GlobalColors.Brand.fourth, GlobalColors.Brand.secondary]}
          style={Styles.linearGradiantBackground}
          start={{x: 0.2, y: 0.2}}
          end={{x: 0.9, y: 0.3}}
        />
      )}
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
