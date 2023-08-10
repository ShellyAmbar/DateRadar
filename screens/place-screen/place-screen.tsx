import {View, Text, Image, Animated, ImageBackground} from "react-native";
import React, {useEffect, useState} from "react";
import {Box} from "@traveloffline/components/controllers/box/box";
import {PlaceScreenProps} from "./interfaces";
import {
  EnglishStyle,
  HebrewStyle,
  height,
  width,
} from "@traveloffline/styles/styles";
import {LinearGradient} from "expo-linear-gradient";
import TextFactory from "@traveloffline/components/factories/text-factory/text-factory";
import {GlobalColors} from "@traveloffline/styles/global-colors";
import i18n from "@traveloffline/services/i18n";
import Spacer from "@traveloffline/components/controllers/spacer/spacer";
import {BlurView} from "expo-blur";
import SwipeButton from "@traveloffline/components/swipe-button/swipe-button";
import Ripple from "@traveloffline/components/ripple-effect/ripple-effect";
import styles from "./place-screen.styles";
import HorizontalAnimatedWheel from "@traveloffline/components/horizontal-animated-wheel/horizontal-animated-wheel";
import CardFlipAnimation from "@traveloffline/components/card-flip-animation/card-flip-animation";
import Swiper from "@traveloffline/components/cars-swipe-animation/cars-swipe-animation";
import usePlaceScreen from "./hooks/usePlaceScreen";

const PlaceScreen = (props: PlaceScreenProps) => {
  const {opacity, isCheckedIn, setIsCheckedIn} = usePlaceScreen();
  return (
    <Box
      scroll
      style={{width: width, height: height}}
      contentContainerStyle={{
        flexDirection: "column",
        width: width,
        flexGrow: 1,
      }}
    >
      <Box
        style={{
          height: "100%",
          flex: 3,
          justifyContent: "flex-end",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <Image
          source={require("@traveloffline/assets/images/pub.jpg")}
          style={{
            width: width,
            height: "100%",
            position: "absolute",
          }}
        />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,1)"]}
          style={{
            width: width,
            height: "100%",
            position: "absolute",

            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <Animated.View
          style={{
            opacity: opacity,
            borderRadius: 20,
            paddingVertical: 20,
            paddingHorizontal: 16,
            width: width,
            alignItems: "flex-start",
          }}
        >
          <BlurView
            tint="dark"
            intensity={10}
            style={{
              borderRadius: 20,
              overflow: "hidden",
              paddingVertical: 20,
              paddingHorizontal: 16,

              width: "100%",
              alignSelf: "center",
              alignItems: "flex-start",
              marginBottom: 40,
            }}
          >
            <TextFactory
              style={{
                ...(i18n.isRTL ? HebrewStyle.H1 : EnglishStyle.H1),
                color: GlobalColors.TextColors.white,
                textShadowColor: GlobalColors.Brand.secondary,
                textShadowRadius: 20,
                textShadowOffset: {
                  width: 7,
                  height: 7,
                },
                elevation: 20,
              }}
            >
              TITLE
            </TextFactory>
            <TextFactory
              style={{
                ...(i18n.isRTL ? HebrewStyle.H3 : EnglishStyle.H3),
                color: GlobalColors.TextColors.white,

                textShadowColor: GlobalColors.Brand.secondary,
                textShadowRadius: 20,
                textShadowOffset: {
                  width: 7,
                  height: 7,
                },
                elevation: 20,
              }}
            >
              SUB TITLE
            </TextFactory>
            <TextFactory
              style={{
                ...(i18n.isRTL ? HebrewStyle.H3 : EnglishStyle.H3),
                color: GlobalColors.TextColors.white,

                textShadowColor: GlobalColors.Brand.secondary,
                textShadowRadius: 20,
                textShadowOffset: {
                  width: 5,
                  height: 5,
                },
                elevation: 20,
              }}
            >
              SUB TITLE
            </TextFactory>
          </BlurView>
        </Animated.View>
        <Spacer size={30} />
      </Box>
      <Box
        style={{
          backgroundColor: "black",

          flex: 1,

          width: "100%",
          alignItems: "center",
        }}
      >
        <Spacer size={20} />

        <SwipeButton
          onToggle={(isToggled) => {
            setIsCheckedIn(isToggled);
          }}
        />
        <Spacer size={30} />
        {isCheckedIn && (
          <Ripple style={styles.buttonStart} onTap={() => {}}>
            <TextFactory style={styles.buttonStartText}>Start</TextFactory>
          </Ripple>
        )}
      </Box>
    </Box>
  );
};

export default PlaceScreen;
