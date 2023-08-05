import React from "react";
import {Box} from "@traveloffline/components/controllers/box/box";
import {createStyle} from "./tab-item.styles";
import TextFactory from "@traveloffline/components/factories/text-factory/text-factory";
import {TabItemProps} from "./interfaces";

const TabItem = ({onPress, item, ...props}: TabItemProps) => {
  const Styles = createStyle({isSelected: item.isSelected});
  return (
    <Box onPress={() => onPress(item)} style={Styles.container}>
      <TextFactory style={Styles.text}>{item.name}</TextFactory>
    </Box>
  );
};

export default TabItem;
