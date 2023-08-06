import React from "react";
import Animated from "react-native-reanimated";
import styles from "./animated-circular-button.styles";
import TextFactory from "../factories/text-factory/text-factory";
const AnimatedCircularButton = () => {
  return (
    <Animated.View style={styles.container}>
      <TextFactory style={styles.text}>Start</TextFactory>
    </Animated.View>
  );
};

export default AnimatedCircularButton;
