import React, {Ref, forwardRef} from "react";
import {Keyboard, TextInput, TextInputProps} from "react-native";
import styles from "./code-field.styles";
import {useFocusState} from "./hooks/useFocusState";
import {CodeFieldProps} from "./interfaces";
import {getSymbols} from "./utils";
import {Box} from "@traveloffline/components/controllers/box/box";

const CodeField = forwardRef(
  (
    {
      rootStyle,
      textInputStyle,
      onBlur,
      onFocus,
      value,
      renderCell,
      cellCount = 4,
      RootProps = {},
      ...rest
    }: CodeFieldProps & TextInputProps,
    ref: Ref<TextInput>
  ) => {
    const focusState = useFocusState(onBlur, onFocus);
    const cells = getSymbols(value || "", cellCount).map(
      (symbol, index, symbols) => {
        const isFirstEmptySymbol = symbols.indexOf("") === index;

        return renderCell({
          index,
          symbol,
          isFocused: focusState.isFocused && isFirstEmptySymbol,
        });
      }
    );

    return (
      <Box {...RootProps} style={[styles.root, rootStyle]}>
        {cells}
        <TextInput
          disableFullscreenUI
          caretHidden
          spellCheck={false}
          autoCorrect={false}
          blurOnSubmit={false}
          clearButtonMode="never"
          autoCapitalize="characters"
          underlineColorAndroid="transparent"
          maxLength={cellCount}
          {...rest}
          value={value}
          onBlur={focusState.onBlur}
          onFocus={focusState.onFocus}
          style={[styles.textInput, textInputStyle]}
          ref={ref}
          returnKeyType="done"
          onSubmitEditing={() => Keyboard.dismiss()}
        />
      </Box>
    );
  }
);

export default CodeField;
