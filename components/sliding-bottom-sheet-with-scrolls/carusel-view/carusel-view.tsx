import {FlatList} from "react-native";
import React from "react";
import {CaruselViewProps, Direction} from "./interfaces";

import ScrollItem from "./scroll-item/scroll-item";

const CaruselView = ({
  scrollItem,
  onEndDrag,
  onStartDrag,
  onStartTouch,
  ...props
}: CaruselViewProps) => {
  return (
    <FlatList
      key={scrollItem.index}
      style={{
        marginTop: 30,
        width: "100%",
      }}
      contentContainerStyle={{
        justifyContent: "center",

        paddingHorizontal:
          scrollItem.direction === Direction.Horizontal ? 20 : 20,
        paddingBottom: scrollItem.direction === Direction.Vertical ? 300 : 0,
        paddingTop: scrollItem.direction === Direction.Vertical ? 20 : 0,
      }}
      onTouchStart={onStartTouch}
      onTouchEnd={onEndDrag}
      onScrollEndDrag={onEndDrag}
      horizontal={scrollItem.direction === Direction.Horizontal}
      data={scrollItem.list}
      renderItem={({item, index}) => (
        <ScrollItem
          key={item.index}
          dataItem={item}
          scrollDirection={scrollItem.direction}
          scrollX={0}
        />
      )}
    />
  );
};

export default CaruselView;
