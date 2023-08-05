import React from "react";
import {Box} from "../box/box";

import {createStyle} from "./spacer.styles";
import {SpacerProps} from "./interfaces";

const Spacer = ({size = 8, isVertical = true}: SpacerProps) => {
  const style = createStyle(size, isVertical);
  return <Box style={style.container} />;
};

export default Spacer;
