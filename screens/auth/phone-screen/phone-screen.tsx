import React, {useEffect, useRef, useState} from "react";
import {Box} from "@traveloffline/components/controllers/box/box";
import Left from "@traveloffline/assets/images/direction-left.svg";
import Styles from "./phone-screen.styles";
import {TouchableOpacity, Text, Keyboard} from "react-native";
import Spacer from "@traveloffline/components/controllers/spacer/spacer";
import CountryCodePicker from "rn-country-code-picker-modal";
import {PhoneAuthProvider, signInWithPhoneNumber} from "firebase/auth";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import ReactiveTextInput from "rn-reactive-text-input";
import {GlobalColors} from "@traveloffline/styles/global-colors";
import Button from "@traveloffline/components/controllers/button/button";
import {app, auth} from "@traveloffline/firebaseConfig";
export default function PhoneScreen(props) {
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [message, showMessage] = useState("");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
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
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
        attemptInvisibleVerification={false}
      />
      <Spacer size={32} />
      <TouchableOpacity
        onPress={() => props.navigation.replace("Auth")}
        style={Styles.buttonLeft}
      >
        <Left />
      </TouchableOpacity>
      <Spacer size={36} />
      <Text style={Styles.title}>{"Enter your phone number"}</Text>
      <Spacer size={36} />
      <Box style={Styles.horizontal}>
        <CountryCodePicker
          onPickedCode={(code) => {
            setPhoneNumber(code);
            inputRef.current?.focus();
          }}
          modalStyle={{minHeight: 100, maxHeight: 250}}
        />
        <Spacer size={16} isVertical={false} />
        <ReactiveTextInput
          ref={inputRef}
          placeholderTextColor={GlobalColors.TextColors.thierd}
          textInputStyle={Styles.textInput}
          placeholder="Enter your phone number"
          label=""
          lableStyle={Styles.lable}
          defaultValue={""}
          value={phoneNumber}
          onChangeText={(t) => setPhoneNumber(t)}
          textContentType="telephoneNumber"
          onDebounce={(text) => {
            setPhoneNumber(text);
          }}
          keyboardType="number-pad"
          autoFocus={true}
          keyboardAppearance="default"
          blurOnSubmit={false}
          autoCorrect={false}
          returnKeyType="done"
          onKeyPress={({nativeEvent}) => {
            inputRef.current?.focus();
          }}
          onSubmitEditing={() => {
            inputRef.current?.focus();
          }}
          onEndEditing={() => {
            inputRef.current?.focus();
          }}
        />
      </Box>

      <Spacer size={16} />

      <Button
        isGradiant
        buttonStyle={Styles.button}
        label="Next"
        disabled={!phoneNumber}
        onPress={async () => {
          try {
            const result = await signInWithPhoneNumber(
              auth,
              phoneNumber,
              recaptchaVerifier.current
            );

            showMessage("Verification code has been sent to your phone.");
            console.log("Verification code has been sent to your phone.");
            props.navigation.navigate("OTP", {
              confirmResult: result,
            });
          } catch (err) {
            showMessage(`Error: ${err.message}`);
            console.log(`Error: ${err.message}`);
            props.navigation.navigate("OTP", {
              confirmResult: null,
            });
          }
        }}
      />

      <Spacer size={16} />
      {/* {attemptInvisibleVerification && <FirebaseRecaptchaBanner />} */}
    </Box>
  );
}
