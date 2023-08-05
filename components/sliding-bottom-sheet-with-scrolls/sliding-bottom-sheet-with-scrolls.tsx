import React, {useState} from "react";
import SlidingBottomSheet from "../sliding-bottom-sheet/sliding-bottom-sheet";
import {BottomSheetWithScrollsProps} from "./interfaces";

import CaruselView from "./carusel-view/carusel-view";

const SlidingBottomSheetWithScrolls = ({
  scrolls,
  ...props
}: BottomSheetWithScrollsProps) => {
  const [isSlidingEnabled, setisSlidingEnabled] = useState(true);

  return (
    <SlidingBottomSheet isGestureEnabled={isSlidingEnabled}>
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
