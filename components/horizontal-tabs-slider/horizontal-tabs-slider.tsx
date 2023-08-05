import React from "react";
import Styles from "./horizontal-tabs-slider.styles";
import TabItem from "./tab-item/tab-item";
import {HorizontalSliderProps, ListItem} from "./interfaces";
import useHorizontalSlider from "./hooks/useHorizontalSlider";
import {Box} from "../controllers/box/box";

const HorizontalTabsSlider = ({
  dataList,
  onScrollEndDrag,
  onScrollBeginDrag,
  ...props
}: HorizontalSliderProps) => {
  const {listOfData, onSelectItem, scrollRef} = useHorizontalSlider({
    list: dataList,
  });

  return (
    <Box
      onScrollEndDrag={onScrollEndDrag}
      onScrollBeginDrag={onScrollBeginDrag}
      onTouchEnd={onScrollEndDrag}
      onTouchStart={onScrollBeginDrag}
      scroll
      ref={(ref) => {
        scrollRef.current = ref;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={Styles.contentCointainer}
      style={Styles.cointainer}
    >
      <>
        {listOfData?.length &&
          listOfData?.map((item, index) => (
            <TabItem key={item.index} item={item} onPress={onSelectItem} />
          ))}
      </>
    </Box>
  );
};
export default HorizontalTabsSlider;
