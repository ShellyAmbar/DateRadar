import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import SlidingBottomSheet from "../sliding-bottom-sheet/sliding-bottom-sheet";
import {BottomSheetWithScrollsProps, Direction} from "./interfaces";
import Animated, {
  interpolate,
  Extrapolate,
  useSharedValue,
} from "react-native-reanimated";
import ScrollItem from "./scroll-item/scroll-item";

const SlidingBottomSheetWithScrolls = ({
  scrolls,
  ...props
}: BottomSheetWithScrollsProps) => {
  const [isSlidingEnabled, setisSlidingEnabled] = useState(true);

  return (
    <SlidingBottomSheet isGestureEnabled={isSlidingEnabled}>
      {scrolls?.map((scroll, index) => (
        <FlatList
          key={scroll.index}
          style={{
            marginTop: 30,
            width: "100%",
          }}
          contentContainerStyle={{
            justifyContent: "center",

            paddingHorizontal:
              scroll.direction === Direction.Horizontal ? 20 : 20,
            paddingBottom: scroll.direction === Direction.Vertical ? 300 : 0,
            paddingTop: scroll.direction === Direction.Vertical ? 20 : 0,
          }}
          onTouchStart={() => {
            setisSlidingEnabled(false);
          }}
          onTouchEnd={() => {
            setisSlidingEnabled(true);
          }}
          onScrollEndDrag={() => {
            setisSlidingEnabled(true);
          }}
          horizontal={scroll.direction === Direction.Horizontal}
          data={scroll.list}
          renderItem={({item, index}) => (
            <ScrollItem
              key={item.index}
              dataItem={item}
              scrollDirection={scroll.direction}
            />
          )}
        />
      ))}
    </SlidingBottomSheet>
  );
};

export default SlidingBottomSheetWithScrolls;
