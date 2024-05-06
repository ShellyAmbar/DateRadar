import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import SearchItemProps from "./interfaces";
import Styles from "./search-item.styles";
const SearchItem = (props: SearchItemProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[Styles.container, {...props.containerStyle}]}
    >
      <Text style={[Styles.text, {...props.textStyle}]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default SearchItem;
