import {View, Text, Animated} from "react-native";
import React, {useEffect, useState} from "react";

const usePlaceScreen = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const opacity = useState(new Animated.Value(1))[0];

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      fadeOut();
    });
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      fadeIn();
    });
  };

  useEffect(() => {
    fadeOut();
  }, []);
  return {
    isCheckedIn,
    setIsCheckedIn,
    opacity,
  };
};

export default usePlaceScreen;
