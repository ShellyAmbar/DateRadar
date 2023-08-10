import React from "react";
import styles from "./label.styles";
import {Box} from "@traveloffline/components/controllers/box/box";
import TextFactory from "@traveloffline/components/factories/text-factory/text-factory";
import {ILabelProps} from "./interfaces";

export default function Label({children}: ILabelProps) {
  return (
    <Box style={styles.labelContainer}>
      <TextFactory style={styles.label}>{children}</TextFactory>
    </Box>
  );
}
