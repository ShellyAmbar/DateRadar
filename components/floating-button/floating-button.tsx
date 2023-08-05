import React from "react";
import styles from "./floating-button.styles";
import {Box} from "../controllers/box/box";
import Search from "../../assets/images/search.svg";

const FloatingButton = ({onPress}: {onPress: () => void}) => {
  return (
    <Box onPress={onPress} style={styles.container}>
      <Search height={40} width={40} />
    </Box>
  );
};

export default FloatingButton;
