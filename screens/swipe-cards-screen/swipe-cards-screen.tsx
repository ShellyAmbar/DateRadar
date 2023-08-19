import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Box} from "@traveloffline/components/controllers/box/box";
import styles from "./swipe-cards-screen.styles";
import Spacer from "@traveloffline/components/controllers/spacer/spacer";

import {height, width} from "@traveloffline/styles/styles";
import {Animated, Image, PanResponder} from "react-native";

import TextFactory from "@traveloffline/components/factories/text-factory/text-factory";
import {GlobalColors} from "@traveloffline/styles/global-colors";
import CardFlipAnimation from "@traveloffline/components/card-flip-animation/card-flip-animation";
import {BlurView} from "expo-blur";
import Close from "@traveloffline/assets/images/closeIcon.svg";

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
  {
    id: 3,
    uri: require("@traveloffline/assets/images/1.jpg"),
  },
  {
    id: 4,
    uri: require("@traveloffline/assets/images/2.jpg"),
  },
  {
    id: 5,
    uri: require("@traveloffline/assets/images/3.jpg"),
  },
];
const SwipeCardsScreen = (props) => {
  const position = new Animated.ValueXY();
  const [currentIndex, setcurrentIndex] = useState(0);
  const [isRotate, setisRotate] = useState(0);
  const panRes = useRef({panHandlers: {}});
  const isRotateVal = new Animated.Value(0);
  const [users, setusers] = useState(data);

  useEffect(() => {
    setusers(data);
  }, []);

  const rotate = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });

  const opacityBack = position.x.interpolate({
    inputRange: [-width / 4, 0, width / 4],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });
  const opacityCardRotate = isRotateVal.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const textYesOPacity = position.x.interpolate({
    inputRange: [-width / 30, 0, width / 30],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });
  const textNoOPacity = position.x.interpolate({
    inputRange: [-width / 30, 0, width / 30],
    outputRange: [1, 0, 0],
    extrapolate: "clamp",
  });

  const nextCardOPacity = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });

  const nextCardScale = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });

  const rotateAndTraslate = {
    transform: [
      {
        rotate: rotate,
      },
      ...position.getTranslateTransform(),
    ],
  };

  useEffect(() => {
    position.setValue({x: 0, y: 0});
    isRotateVal.setValue(0);
    setisRotate(0);
  }, [currentIndex]);

  panRes.current = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      position.setValue({
        x: isRotate ? -gestureState.dx : gestureState.dx,
        y: gestureState.dy,
      });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx >= width / 2) {
        Animated.spring(position, {
          toValue: {
            x: width + 100,
            y: gestureState.dy,
          },
          useNativeDriver: true,
        }).start(() => {
          setcurrentIndex(currentIndex + 1);
        });
      }
      if (gestureState.dx <= -width / 2) {
        Animated.spring(position, {
          toValue: {
            x: -width - 100,
            y: gestureState.dy,
          },
          useNativeDriver: true,
        }).start(() => {
          setcurrentIndex(currentIndex + 1);
        });
      }

      if (gestureState.dx < width / 2 || gestureState.dx > -width / 2) {
        Animated.timing(position, {
          toValue: {x: 0, y: 0},
          duration: 500,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const renderUsers = () => {
    return users
      .map((item, i) => {
        if (i < currentIndex) {
          return null;
        } else if (i === currentIndex) {
          return (
            <Box
              style={[
                {
                  height: height * 0.7,
                  width: "100%",
                },
              ]}
              key={item.id}
            >
              <CardFlipAnimation
                frontView={
                  <Animated.View
                    {...panRes.current.panHandlers}
                    style={[
                      {
                        height: height * 0.7,
                        width: "100%",

                        position: "absolute",
                      },
                      rotateAndTraslate,
                    ]}
                  >
                    <Image
                      style={{
                        flex: 1,
                        resizeMode: "cover",
                        borderRadius: 20,
                        width: "100%",
                        height: "100%",
                      }}
                      source={item.uri}
                    />

                    <Animated.View
                      style={{
                        opacity: opacityBack,
                        backgroundColor: "rgba(0,0,0,0.6)",
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                        position: "absolute",
                        zIndex: 1000,
                      }}
                    >
                      <Animated.Text
                        style={{
                          opacity: isRotate ? textYesOPacity : textNoOPacity,
                          color: "red",
                          fontSize: 50,

                          position: "absolute",
                          top: 60,
                          ...(isRotate ? {start: 30} : {end: 30}),
                          borderColor: "red",
                          borderWidth: 2,
                          padding: 10,
                          transform: [
                            {rotate: isRotate ? "-30deg" : "30deg"},
                            {rotateY: isRotate ? "180deg" : "0deg"},
                          ],
                        }}
                      >
                        {"Nope"}
                      </Animated.Text>
                      <Animated.Text
                        style={{
                          opacity: isRotate ? textNoOPacity : textYesOPacity,
                          color: "#00FF7F",
                          fontSize: 50,

                          position: "absolute",
                          top: 60,
                          ...(!isRotate ? {start: 30} : {end: 30}),
                          borderColor: "#00FF7F",
                          borderWidth: 2,
                          padding: 10,
                          transform: [
                            {rotate: isRotate ? "30deg" : "-30deg"},
                            {rotateY: isRotate ? "180deg" : "0deg"},
                          ],
                        }}
                      >
                        {"Greate!"}
                      </Animated.Text>
                    </Animated.View>

                    <Animated.View
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                        position: "absolute",
                        zIndex: 100,
                        opacity: opacityCardRotate,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        justifyContent: "flex-end",
                        paddingHorizontal: 16,
                        paddingVertical: 20,
                      }}
                    >
                      <TextFactory
                        style={{
                          color: GlobalColors.TextColors.white,
                          fontSize: 25,
                        }}
                      >
                        Name
                      </TextFactory>
                      <TextFactory
                        style={{
                          color: GlobalColors.TextColors.white,
                          fontSize: 25,
                        }}
                      >
                        Last Name
                      </TextFactory>
                      <TextFactory
                        style={{
                          color: GlobalColors.TextColors.white,
                          fontSize: 25,
                        }}
                      >
                        About me:
                      </TextFactory>
                    </Animated.View>
                  </Animated.View>
                }
                spinVal={isRotate}
              />
            </Box>
          );
        } else {
          return (
            <Animated.View
              key={item.id}
              style={[
                {
                  height: height * 0.7,
                  width: "100%",

                  position: "absolute",
                  // opacity: nextCardOPacity,
                  backgroundColor: "rgba(0,0,0,0.8)",
                  transform: [{scale: nextCardScale}],
                  borderRadius: 20,
                },
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
              <Animated.View
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  position: "absolute",
                  zIndex: 100,

                  backgroundColor: "rgba(0,0,0,0.8)",
                }}
              ></Animated.View>
            </Animated.View>
          );
        }
      })
      .reverse();
  };
  return (
    <Box style={styles.container}>
      <Spacer size={80} />
      <Box
        style={{position: "absolute", top: 20}}
        onPress={() => {
          props.navigation.navigate("PlaceScreen");
        }}
      >
        <Close
          height={30}
          width={30}
          style={{position: "absolute", top: 20, left: 16}}
          fill="#FFFF"
        />
      </Box>
      <Box style={styles.stack}>{renderUsers()}</Box>
      <Spacer size={20} />
      <Box
        style={{
          flex: 1,

          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 50,
        }}
      >
        <TextFactory
          style={{
            color: GlobalColors.TextColors.white,
            fontSize: 30,

            borderColor: GlobalColors.TextColors.white,
            borderWidth: 2,
            borderRadius: 10,
            padding: 10,
          }}
          onPress={() => {
            isRotateVal.setValue(isRotate ? 0 : 1);
            setisRotate(isRotate ? 0 : 1);
          }}
        >
          {!isRotate ? "Reveal!" : "Hide"}
        </TextFactory>
      </Box>
    </Box>
  );
};

export default SwipeCardsScreen;
