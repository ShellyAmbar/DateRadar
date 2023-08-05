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
          onEndDrag={() => {
            setisSlidingEnabled(true);
          }}
          onStartDrag={() => {
            setisSlidingEnabled(false);
          }}
          onStartTouch={() => {
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
