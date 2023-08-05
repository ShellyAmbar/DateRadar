import { useState } from "react";
import { ITextInputStatus, EnumITextInputStatus } from "./interfaces";
import Styles from "../text-input.styles";

function useInputText() {
  const [inputStatus, setInputStatus] = useState<ITextInputStatus>({
    status: EnumITextInputStatus.Idle,
    activeStyle: null,
  });

  const inputTextFocusHandler = () => {
    if (inputStatus.status === EnumITextInputStatus.Idle || inputStatus.status === EnumITextInputStatus.Error) {
      setInputStatus({ status: EnumITextInputStatus.Focus, activeStyle: Styles.focusColor });
    } else if (inputStatus.status === EnumITextInputStatus.Focus) {
      setInputStatus({ status: EnumITextInputStatus.Idle, activeStyle: null });
    }
  };

  const setErrorStatus = (isError: boolean) => {
    if (isError) {
      setInputStatus({ status: EnumITextInputStatus.Error, activeStyle: Styles.errorColor });
    } else {
      setInputStatus({ status: EnumITextInputStatus.Idle, activeStyle: null });
    }
  };

  return {
    inputStatus,
    inputTextFocusHandler,
    setErrorStatus,
  };
}

export default useInputText;
