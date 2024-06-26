import {Box} from "@traveloffline/components/controllers/box/box";
import React, {useEffect, useRef, useState} from "react";
import Styles from "./otp-screen.styles";
import Spacer from "@traveloffline/components/controllers/spacer/spacer";
import {TouchableOpacity, Text} from "react-native";
import Button from "@traveloffline/components/controllers/button/button";
import Left from "@traveloffline/assets/images/direction-left.svg";
import VerificationCodeInput from "react-native-otp-input-code";
import {KeyboardType} from "./verification-code-input/interfaces";
import {ConfirmationResult} from "firebase/auth";
import CircularTimer from "react-native-animated-circular-counter";

export default function OTPScreen(props) {
  const [otpCode, setOtpCode] = useState("");
  const [message, showMessage] = useState("");
  const [verificationResult, setVerificationResult] =
    useState<ConfirmationResult>();
  const inputRef = useRef(null);

  const [isVarificationCodeValide, setIsVarificationCodeValide] =
    useState(true);
  const [isVarificationCodeSuccess, setIsVarificationCodeSuccess] =
    useState(false);
  const resetBoxes = () => {
    setIsVarificationCodeValide(true);
    setIsVarificationCodeSuccess(false);
  };
  const [showCountDown, setShowCountDown] = useState(true);
  const checkVerificationCode = async (code: string) => {
    // props.navigation.replace("Main");

    if (verificationResult) {
      try {
        const userCredential = await verificationResult.confirm(code);
        console.log(userCredential);
        setIsVarificationCodeSuccess(true);
        setIsVarificationCodeValide(true);
        setShowCountDown(false);
      } catch (err) {
        setIsVarificationCodeSuccess(false);
        setIsVarificationCodeValide(false);
      }
    }
  };
  useEffect(() => {
    const {confirmResult} = props.route.params;
    console.log(confirmResult?.verificationId);
    setVerificationResult(confirmResult);
    inputRef?.current?.focus();
  }, []);

  return (
    <Box
      scroll
      keyboardDismissMode={"none"}
      keyboardShouldPersistTaps={"always"}
      contentContainerStyle={{flexGrow: 1}}
      style={Styles.container}
      automaticallyAdjustKeyboardInsets={false}
    >
      <Spacer size={32} />
      <TouchableOpacity
        onPress={() => props.navigation.replace("Phone")}
        style={Styles.buttonLeft}
      >
        <Left />
      </TouchableOpacity>
      <Spacer size={36} />
      <Text style={Styles.title}>{"Enter the OTP code"}</Text>
      <Spacer size={36} />
      <VerificationCodeInput
        ref={inputRef}
        isSecure={false}
        textContentType="oneTimeCode"
        keyboardType={KeyboardType.number_pad}
        cellCount={6}
        onComplete={checkVerificationCode}
        onChangeText={(value) => {
          if (value.length < 7) {
            resetBoxes();
          }
        }}
        isValid={isVarificationCodeValide}
        isSuccess={isVarificationCodeSuccess}
        textStyle={{color: "#FFFF"}}
        containerStyle={{borderWidth: 1}}
        errorTextStyle={{color: "red"}}
        errorContainerStyle={{borderColor: "red", borderWidth: 2}}
        autoFocus={true}
        keyboardAppearance="default"
        blurOnSubmit={false}
        autoCorrect={false}
        returnKeyType="none"
      />
      <Spacer size={16} />
      <Box style={Styles.bottomView}>
        {showCountDown ? (
          <CircularTimer
            duration={10}
            height={60}
            width={80}
            onFinish={() => {
              setShowCountDown(false);
            }}
            progressColor="red"
            circleColor="white"
            isCountDown={true}
            animateFillProgress={false}
            intervalDuration={500}
            strokeWidth={8}
          />
        ) : (
          <TouchableOpacity
            onPress={() => {
              setShowCountDown(true);
            }}
          >
            <Text style={Styles.sendAgainText}>{"Send again"}</Text>
          </TouchableOpacity>
        )}
        <Spacer size={32} />
        <Button
          isGradiant
          buttonStyle={Styles.button}
          label="Next"
          disabled={!otpCode}
          onPress={async () => {
            try {
              props.navigation.navigate("Main");
            } catch (err) {
              showMessage(`Error: ${err.message}`);
              console.log(`Error: ${err.message}`);
            }
          }}
        />
      </Box>

      <Spacer size={16} />
    </Box>
  );
}
