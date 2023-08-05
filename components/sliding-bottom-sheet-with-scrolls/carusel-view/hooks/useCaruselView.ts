import {Dimensions, FlatList} from "react-native";
import {useState} from "react";
import Animated from "react-native-reanimated";

const useCaruselView = () => {
  const SRC_WIDTH = Dimensions.get("window").width;
  const CARD_LENGTH = SRC_WIDTH * 0.8;
  const CARD_HEIGHT = 200;
  const SPACING = 10;
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  return {
    CARD_HEIGHT,
    CARD_LENGTH,
    SPACING,
    AnimatedFlatList,
    scrollX,
    setScrollX,
    scrollY,
    setScrollY,
  };
};

export default useCaruselView;
