import {
  View,
  Text,
  Animated,
  Easing,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import usePopupProps from "./interfaces";
import AnimationService from "@traveloffline/services/common/animation-service";
import Styles from "../popup.styles";

const usePopup = (props: usePopupProps) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  let deviceH = Dimensions.get("screen").height;
  let deviceW = Dimensions.get("window").height;
  let diff = deviceH - deviceW;

  const animatSlideDown = () => {
    new AnimationService({
      toValue: 0,
      duration: props.durationEnter,
      useNativeDriver: true,
    })
      .create(slideAnim)
      .start(() => {
        props.onClickClose && props.onClickClose();
      });
  };

  const animatSlideUp = (height) => {
    let finalheight =
      Platform.OS === "ios"
        ? -height - diff - Styles.content.marginTop
        : -height - diff;

    new AnimationService({
      toValue: finalheight,
      duration: props.durationExit,
      useNativeDriver: true,
    })
      .create(slideAnim)
      .start();
  };

  return {
    animatSlideDown,
    animatSlideUp,

    slideAnim,
  };
};

export default usePopup;
