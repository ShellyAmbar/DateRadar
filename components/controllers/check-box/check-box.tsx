import React from "react";
import {Tlabel} from "./interfaces";
import Styles from "./check-box.styles";
import {Box} from "@traveloffline/components/controllers/box/box";
import CheckBoxIcon from "@traveloffline/assets/images/checkbox-icon.svg";
import TextFactory from "@traveloffline/components/factories/text-factory/text-factory";

const CheckBox = ({label, status}: Tlabel): JSX.Element => {
  return (
    <Box style={Styles.container}>
      <Box
        style={[
          Styles.checkbox,
          status ? Styles.containerCheck : Styles.containerUnCheck,
        ]}
      >
        {status && <CheckBoxIcon />}
      </Box>
      <TextFactory style={Styles.label}>{label}</TextFactory>
    </Box>
  );
};

export default CheckBox;
