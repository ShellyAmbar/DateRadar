import React, {useState} from "react";
import CodeField from "./code-field/code-field";
import {useBlurOnFulfill} from "./code-field/hooks/useBlurOnFulfill";
import {useClearByFocusCell} from "./code-field/hooks/useClearByFocusCell";
import VerificationCodeInputProps from "./interfaces";
import VerificationCodeCellInput from "./verification-code-cell-input/verification-code-cell-input";
import Styles from "./verification-code-input.styles";
import {CellInputType} from "./verification-code-cell-input/interfaces";

const VerificationCodeInput = ({
  isSecure = false,
  isValid = true,
  isSuccess = false,
  cellCount = 4,
  onComplete,
  onChangeText,
  ...props
}: VerificationCodeInputProps) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({value, cellCount: cellCount});
  const [cellProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...cellProps}
      value={value}
      onChangeText={(val) => {
        if (val.length === cellCount) {
          onComplete(val);
        }
        onChangeText(val);
        setValue(val);
      }}
      cellCount={cellCount}
      rootStyle={Styles.codeFiledRoot}
      keyboardType={props.keyboardType}
      textContentType={props.textContentType}
      renderCell={({index, symbol, isFocused}) => (
        <VerificationCodeCellInput
          isSecure={isSecure}
          numOfCells={cellCount}
          key={index}
          onLayout={getCellOnLayoutHandler(index)}
          isFocused={isFocused}
          status={
            isSuccess
              ? CellInputType.correct
              : isValid
              ? CellInputType.default
              : CellInputType.error
          }
          value={symbol.toString()}
          textStyle={props.textStyle}
          containerStyle={props.containerStyle}
          errorTextStyle={props.errorTextStyle}
          errorContainerStyle={props.errorContainerStyle}
        />
      )}
    />
  );
};

export default VerificationCodeInput;
