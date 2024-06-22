import React from "react";
import {Cursor} from "./cursor/cursor";
import VerificationCodeCellProps, {CellInputType} from "./interfaces";
import Styles from "./verification-code-cell-input.styles";
import {Box} from "@traveloffline/components/controllers/box/box";
import TextFactory from "@traveloffline/components/factories/text-factory/text-factory";

const VerificationCodeCellInput = ({
  numOfCells = 4,
  containerStyle,
  textStyle,
  errorTextStyle,
  errorContainerStyle,
  isSecure = false,
  status,
  successContainerStyle,
  successTextStyle,
  ...props
}: VerificationCodeCellProps) => {
  return (
    <Box
      onLayout={props.onLayout}
      style={[
        Styles.defaultContainer,
        {...containerStyle},
        {
          marginHorizontal: 20 / numOfCells,
        },
        status === CellInputType.error && {
          ...Styles.errorContainer,
          ...errorContainerStyle,
        },
        status === CellInputType.correct && {
          ...Styles.successContainer,
          ...successContainerStyle,
        },
      ]}
    >
      <TextFactory
        style={[
          Styles.text,
          {...textStyle},
          status === CellInputType.error && {
            ...Styles.errorText,
            ...errorTextStyle,
          },
          status === CellInputType.correct && {
            ...Styles.successText,
            ...successTextStyle,
          },
        ]}
      >
        {(props.value ? (isSecure ? "*" : props.value) : null) ||
          (props.isFocused ? <Cursor /> : null)}
      </TextFactory>
    </Box>
  );
};

export default VerificationCodeCellInput;
