import {useNavigation} from "@react-navigation/native";
import {Dimensions} from "react-native";
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const useScrollItem = ({
  isAnimateX,
  index,
  scrollX,
  scrollY,
  ...props
}: UseScrollItemProps) => {
  const navigation = useNavigation();
  const SRC_WIDTH = Dimensions.get("window").width;
  const CARD_LENGTH = SRC_WIDTH * 0.8;
  const CARD_HEIGHT = 200;
  const size = useSharedValue(0.8);
  const inputRange = [
    (index - 1) * (isAnimateX ? CARD_LENGTH : CARD_HEIGHT),
    index * (isAnimateX ? CARD_LENGTH : CARD_HEIGHT),
    (index + 1) * (isAnimateX ? CARD_LENGTH : CARD_HEIGHT),
  ];

  size.value = interpolate(
    isAnimateX ? scrollX : scrollY,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP
  );

  const opacity = useSharedValue(1);
  const opacityInputRange = [
    (index - 1) * (isAnimateX ? CARD_LENGTH : CARD_HEIGHT),
    index * (isAnimateX ? CARD_LENGTH : CARD_HEIGHT),
    (index + 1) * (isAnimateX ? CARD_LENGTH : CARD_HEIGHT),
  ];
  opacity.value = interpolate(
    isAnimateX ? scrollX : scrollY,
    opacityInputRange,
    [0.5, 1, 0.5],
    Extrapolate.CLAMP
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {...(isAnimateX ? {scaleY: size.value} : {scaleX: size.value})},
      ],
      opacity: opacity.value,
    };
  });
  return {
    CARD_HEIGHT,
    CARD_LENGTH,
    cardStyle,
    navigation,
    SRC_WIDTH,
  };
};

export default useScrollItem;
