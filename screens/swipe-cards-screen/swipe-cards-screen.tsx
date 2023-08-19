import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Box} from "@traveloffline/components/controllers/box/box";
import styles from "./swipe-cards-screen.styles";
import Spacer from "@traveloffline/components/controllers/spacer/spacer";

import {height, width} from "@traveloffline/styles/styles";
import {
  Animated,
  Image,
  PanResponder,
  PanResponderInstance,
} from "react-native";

const data = [
  {
    id: 0,
    uri: require("@traveloffline/assets/images/1.jpg"),
  },
  {
    id: 1,
    uri: require("@traveloffline/assets/images/2.jpg"),
  },
  {
    id: 2,
    uri: require("@traveloffline/assets/images/3.jpg"),
  },
];
const SwipeCardsScreen = () => {
  const position = new Animated.ValueXY();
  const [currentIndex, setcurrentIndex] = useState(0);
  const panRes = useRef({panHandlers: {}});

  useLayoutEffect(() => {
    panRes.current = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        console.log("move");

        position.setValue({x: gestureState.dx, y: gestureState.dy});
      },
      onPanResponderRelease: (evt, gestureState) => {},
    });
  }, []);

  const renderUsers = () => {
    return data
      .map((item, i) => {
        return (
          <Animated.View
            {...panRes.current.panHandlers}
            key={item.id}
            style={[
              {
                height: height * 0.7,
                width: width,
                padding: 10,
                position: "absolute",
              },
              {transform: position.getTranslateTransform()},
            ]}
          >
            <Image
              style={{
                flex: 1,
                resizeMode: "cover",
                borderRadius: 20,
                height: null,
                width: null,
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      })
      .reverse();
  };
  return (
    <Box style={styles.container}>
      <Spacer size={60} />
      <Box style={styles.stack}>{renderUsers()}</Box>
      <Spacer size={60} />
    </Box>
  );
};

export default SwipeCardsScreen;
