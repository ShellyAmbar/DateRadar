import React from "react";
import styles from "./labels-header.styles";
import Label from "../label/label";
import {LabelsHeaderProps} from "./interfaces";
import {Box} from "@traveloffline/components/controllers/box/box";

export default function LabelsHeader({day, month, year}: LabelsHeaderProps) {
  return (
    <Box style={styles.labelRow}>
      <Label>{day}</Label>
      <Label>{month}</Label>
      <Label>{year}</Label>
    </Box>
  );
}
