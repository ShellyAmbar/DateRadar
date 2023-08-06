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

const PlaceScreen = (props: PlaceScreenProps) => {
  const opacity = useState(new Animated.Value(1))[0];

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      fadeOut();
    });
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      fadeIn();
    });
  };

  useEffect(() => {
    fadeOut();
  }, []);

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
          flex: 1,
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
        {/* <Animated.View
          style={{
            opacity: opacity,
            borderRadius: 20,
            paddingVertical: 20,
            paddingHorizontal: 16,
            width: width,
            alignItems: "flex-start",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        > */}
        <BlurView
          tint="dark"
          intensity={30}
          style={{
            borderRadius: 20,
            overflow: "hidden",
            paddingVertical: 20,
            paddingHorizontal: 16,
            width: width,
            alignItems: "flex-start",
            marginBottom: -10,
          }}
        >
          <TextFactory
            style={{
              ...(i18n.isRTL ? HebrewStyle.H1 : EnglishStyle.H1),
              color: GlobalColors.TextColors.white,
              textShadowColor: "#9400D3",
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

              textShadowColor: "#9400D3",
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

              textShadowColor: "#9400D3",
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
        </BlurView>
        {/* </Animated.View> */}
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
        {/* <BlurView
          intensity={50}
          style={{
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 11,
          }}
        > */}
        <TextFactory
          style={{
            backgroundColor: "transparent",
            width: "50%",

            textAlign: "center",

            color: GlobalColors.TextColors.white,
            borderRadius: 20,
          }}
        >
          kljkljklj
        </TextFactory>
        {/* </BlurView> */}
      </Box>
    </Box>
  );
};

export default PlaceScreen;
