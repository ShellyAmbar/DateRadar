import React, {useEffect} from "react";
import TextInputProps from "./interfaces";
import Styles from "./text-input.styles";
import Text from "@traveloffline/components/controllers/text/text";
import {Box} from "@traveloffline/components/controllers/box/box";
import Spacer from "@traveloffline/components/controllers/spacer/spacer";
import {Input as KitInput} from "@ui-kitten/components";
import useInputText from "./hooks/useInputText";
import i18n from "@traveloffline/services/i18n";

const TextInput = ({
  label,
  caption,
  isError,
  shownDisable,
  disabled,
  ...props
}: TextInputProps) => {
  const {inputStatus, inputTextFocusHandler, setErrorStatus} = useInputText();

  useEffect(() => {
    setErrorStatus(isError);
  }, [isError]);

  return (
    <Box>
      <Text style={[Styles.title, shownDisable && Styles.titleDisabled]}>
        {label}
      </Text>
      <Spacer size={8} />
      <KitInput
        allowFontScaling={false}
        style={[
          props.style,
          Styles.textInput,
          inputStatus.activeStyle,
          shownDisable && Styles.inputDisabled,
        ]}
        onFocus={inputTextFocusHandler}
        onBlur={inputTextFocusHandler}
        textStyle={[
          Styles.inputSize,
          props.multiline && Styles.multiLine,
          shownDisable && Styles.titleDisabled,
        ]}
        textAlign={i18n.isRTL ? "right" : "left"}
        disabled={disabled}
        {...props}
      />
      {caption && <Text style={Styles.errorText}>{caption}</Text>}
    </Box>
  );
};

export default TextInput;
