import React from "react";
import {PanGestureHandler} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import {GlobalColors} from "@traveloffline/styles/global-colors";
import useSwipeButton from "./hooks/useSwipeButton";

const SwipeButton = ({onToggle}: {onToggle: (isToggled: boolean) => void}) => {
  const {
    styles,
    AnimatedStyles,
    animatedGestureHandler,
    AnimatedLinearGradient,
  } = useSwipeButton({
    onToggle,
  });
  return (
    <Animated.View style={[styles.swipeCont, AnimatedStyles.swipeCont]}>
      <AnimatedLinearGradient
        style={[AnimatedStyles.colorWave, styles.colorWave]}
        colors={[GlobalColors.Brand.thierd, GlobalColors.Brand.secondary]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
      ></AnimatedLinearGradient>
      <Animated.Text style={[styles.swipeTextOut, AnimatedStyles.swipeTextOut]}>
        Checked In!
      </Animated.Text>

      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]} />
      </PanGestureHandler>
      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
        Swipe to Check IN!
      </Animated.Text>
    </Animated.View>
  );
};

export default SwipeButton;
