import Text from "@traveloffline/components/controllers/text/text";
import React from "react";
import Styles from "./text-label.styles";

const textLabel = ({...props}) => {
  return <Text {...props} style={[Styles.textLabel, props.style]} />;
};

export default textLabel;
