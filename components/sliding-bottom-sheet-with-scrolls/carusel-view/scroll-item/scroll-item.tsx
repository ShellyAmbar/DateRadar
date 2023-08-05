import React from "react";
import {ScrollItemProps} from "./interfases";

import TextFactory from "@traveloffline/components/factories/text-factory/text-factory";
import {Box} from "@traveloffline/components/controllers/box/box";
import Spacer from "@traveloffline/components/controllers/spacer/spacer";
import {Direction} from "../interfaces";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {Dimensions, Image} from "react-native";
import {EnglishStyle, HebrewStyle, height} from "@traveloffline/styles/styles";
import {GlobalColors} from "@traveloffline/styles/global-colors";
import {LinearGradient} from "expo-linear-gradient";
import useScrollItem from "./hooks/useScrollItem";
import i18n from "@traveloffline/services/i18n";

const ScrollItem = ({
  scrollDirection,
  dataItem,
  scrollX,
  scrollY,
  index,
  numTotalItems,
  isAnimateX,
  isAnimateY,
  ...props
}: ScrollItemProps) => {
  const {CARD_LENGTH, cardStyle} = useScrollItem({
    index: index,
    isAnimateX: isAnimateX,
    scrollX,
    scrollY,
  });

  return (
    <Animated.View
      style={[
        {
          width: scrollDirection === Direction.Vertical ? "100%" : CARD_LENGTH,
          height: 200,

          overflow: "hidden",
          borderRadius: 5,
          marginLeft: 10,
        },
        {
          ...cardStyle,
        },
      ]}
      key={dataItem.index}
    >
      <Image
        source={dataItem.image}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          borderRadius: 5,
        }}
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          borderRadius: 5,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Box
        style={{
          paddingHorizontal: 16,
          paddingVertical: 10,
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
        }}
      >
        <TextFactory
          style={{
            ...(i18n.isRTL ? HebrewStyle.H6 : EnglishStyle.H6),
            color: GlobalColors.TextColors.white,
          }}
        >
          {dataItem.title}
        </TextFactory>
        <TextFactory
          style={{
            ...(i18n.isRTL ? HebrewStyle.BodyText1 : EnglishStyle.BodyText1),
            color: GlobalColors.TextColors.white,
          }}
        >
          {dataItem.address}
        </TextFactory>
      </Box>
    </Animated.View>
  );
};

export default ScrollItem;
