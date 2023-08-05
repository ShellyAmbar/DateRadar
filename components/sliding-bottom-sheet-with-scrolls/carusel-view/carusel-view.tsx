import {FlatList} from "react-native";
import React from "react";
import {CaruselViewProps, Direction} from "./interfaces";

import Animated from "react-native-reanimated";
import ScrollItemView from "./scroll-item/scroll-item";
import {DataItem} from "./scroll-item/interfases";
import useCaruselView from "./hooks/useCaruselView";
import Spacer from "@traveloffline/components/controllers/spacer/spacer";

const CaruselView = ({
  scrollItem,
  onEndDrag,
  onStartDrag,
  onStartTouch,
  onEndTouch,
  ...props
}: CaruselViewProps) => {
  const {
    CARD_HEIGHT,
    CARD_LENGTH,
    SPACING,
    AnimatedFlatList,
    scrollX,
    setScrollX,
    scrollY,
    setScrollY,
  } = useCaruselView();

  return (
    <Animated.View>
      <Animated.FlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={
          scrollItem.direction === Direction.Horizontal
            ? CARD_LENGTH + SPACING * 1.5
            : CARD_HEIGHT + SPACING * 1.5
        }
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={
          scrollItem.direction === Direction.Horizontal ? "center" : "start"
        }
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
          setScrollY(event.nativeEvent.contentOffset.y);
        }}
        key={scrollItem.index}
        style={{
          marginTop: 30,
          width: "100%",
        }}
        ItemSeparatorComponent={() => (
          <Spacer
            size={10}
            isVertical={scrollItem.direction === Direction.Vertical}
          />
        )}
        contentContainerStyle={{
          justifyContent: "center",
          paddingHorizontal:
            scrollItem.direction === Direction.Horizontal ? 20 : 20,
          paddingBottom: scrollItem.direction === Direction.Vertical ? 500 : 0,
          paddingTop: scrollItem.direction === Direction.Vertical ? 20 : 0,
        }}
        onTouchStart={onStartTouch}
        onTouchEnd={onEndTouch}
        onScrollEndDrag={onEndDrag}
        onScrollBeginDrag={onStartDrag}
        horizontal={scrollItem.direction === Direction.Horizontal}
        data={scrollItem.list}
        renderItem={({item, index}) => (
          <ScrollItemView
            key={(item as DataItem).index}
            dataItem={item as DataItem}
            scrollDirection={scrollItem.direction}
            scrollX={scrollX}
            scrollY={scrollY}
            index={index}
            numTotalItems={scrollItem.list?.length ?? 0}
            isAnimateX={scrollItem.direction === Direction.Horizontal}
            isAnimateY={scrollItem.direction === Direction.Vertical}
          />
        )}
      />
    </Animated.View>
  );
};

export default CaruselView;
