import React from "react";
import {ScrollItemProps} from "./interfases";

import TextFactory from "@traveloffline/components/factories/text-factory/text-factory";
import {Box} from "@traveloffline/components/controllers/box/box";
import Spacer from "@traveloffline/components/controllers/spacer/spacer";
import {Direction} from "../interfaces";

const ScrollItem = ({scrollDirection, dataItem, ...props}: ScrollItemProps) => {
  return (
    <>
      <Box
        key={dataItem.index}
        style={{
          width: scrollDirection === Direction.Vertical ? "100%" : 200,
          height: 200,
          backgroundColor: "pink",
        }}
      >
        <TextFactory> {dataItem.title}</TextFactory>
        <TextFactory> {dataItem.subTitle}</TextFactory>
      </Box>
      <Spacer size={10} isVertical={scrollDirection === Direction.Vertical} />
    </>
  );
};

export default ScrollItem;
