import React, {useState} from "react";
import SlidingBottomSheet from "../sliding-bottom-sheet/sliding-bottom-sheet";
import {BottomSheetWithScrollsProps} from "./interfaces";

import CaruselView from "./carusel-view/carusel-view";
import HorizontalTabsSlider from "../horizontal-tabs-slider/horizontal-tabs-slider";
import {t} from "@traveloffline/services/i18n";
import Spacer from "../controllers/spacer/spacer";
import {Box} from "../controllers/box/box";

const SlidingBottomSheetWithScrolls = ({
  scrolls,
  ...props
}: BottomSheetWithScrollsProps) => {
  const [isSlidingEnabled, setisSlidingEnabled] = useState(true);

  return (
    <SlidingBottomSheet isGestureEnabled={isSlidingEnabled}>
      <Spacer size={20} />
      <HorizontalTabsSlider
        onScrollBeginDrag={() => {
          setisSlidingEnabled(false);
        }}
        onScrollEndDrag={() => {
          setisSlidingEnabled(true);
        }}
        dataList={[
          {
            index: 1,
            name: "one dfgdfdfg",
            isSelected: false,
          },
          {
            index: 2,
            name: "two ddhgdg",
            isSelected: false,
          },
          {
            index: 3,
            name: "three dfgdfdgdf",
            isSelected: false,
          },
        ]}
      />

      {scrolls?.map((scroll, index) => (
        <CaruselView
          onEndTouch={() => {
            console.log("onEndDrag");
            setisSlidingEnabled(true);
          }}
          onEndDrag={() => {
            console.log("onEndDrag");

            setisSlidingEnabled(true);
          }}
          onStartDrag={() => {
            //   console.log("onStartDrag");
            setisSlidingEnabled(false);
          }}
          onStartTouch={() => {
            //   console.log("onStartDrag");
            setisSlidingEnabled(false);
          }}
          key={scroll.index}
          scrollItem={scroll}
        />
      ))}
    </SlidingBottomSheet>
  );
};

export default SlidingBottomSheetWithScrolls;
