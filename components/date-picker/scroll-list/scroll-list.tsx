import React from "react";
import styles from "./scroll-list.styles";
import {ScrollListProps} from "./interfaces";
import {Box} from "@traveloffline/components/controllers/box/box";
import TextFactory from "@traveloffline/components/factories/text-factory/text-factory";

export default function ScrollList({title, textHeight}: ScrollListProps) {
  return (
    <Box style={styles.container}>
      <TextFactory style={[{height: textHeight}, styles.text]}>
        {title}
      </TextFactory>
    </Box>
  );
}
