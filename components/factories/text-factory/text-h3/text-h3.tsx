import Text from "@traveloffline/components/controllers/text/text";
import React from "react";
import Styles from "./text-h3.styles";

const TextH3 = ({...props}) => {
  return <Text {...props} style={[Styles.h3, props.style]} />;
};

export default TextH3;
