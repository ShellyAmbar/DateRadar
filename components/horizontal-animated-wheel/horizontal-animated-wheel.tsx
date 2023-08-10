import React from "react";
import {StyleSheet, FlatList, View, Text, Dimensions} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const items = [
  {id: 1, text: "A"},
  {id: 2, text: "B"},
  {id: 3, text: "C"},
  {id: 4, text: "D"},
  {id: 5, text: "E"},
  {id: 6, text: "F"},
  {id: 7, text: "G"},
  {id: 8, text: "H"},
  {id: 9, text: "I"},
  {id: 10, text: "J"},
  {id: 11, text: "K"},
  {id: 12, text: "L"},
];

const {width: SCREEN_WIDTH} = Dimensions.get("window");
const ITEM_WIDTH = SCREEN_WIDTH / 5;
const data = [...items, ...items, ...items];

const HorizontalAnimatedFlatlist = () => {
  const transX = useSharedValue(0);

  const renderItem = ({item, index}) => {
    return <Item index={index} item={item} transX={transX} />;
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      transX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <AnimatedFlatList
          onScroll={scrollHandler}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          data={data}
          decelerationRate="fast"
          centerContent
          snapToInterval={ITEM_WIDTH}
          scrollEventThrottle={16}
          pagingEnabled
          //  snapToAlignment="center"
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${index}`}
        />
      </View>
    </View>
  );
};

export default HorizontalAnimatedFlatlist;

const Item = ({index, item, transX}) => {
  const udv = useDerivedValue(() => {
    if (
      transX.value >= (index - 3) * ITEM_WIDTH &&
      transX.value <= (index + 3) * ITEM_WIDTH
    ) {
      return transX.value;
    } else if (transX.value < (index - 3) * ITEM_WIDTH) {
      return null;
    } else if (transX.value > (index + 3) * ITEM_WIDTH) {
      return null;
    }
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnimation(udv, index),
      transform: [
        {
          scale: scaleAnimation(udv, index),
        },
        {
          rotateY: `${rotateAnimation(udv, index)}deg`,
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.box, animatedStyle]} item={item}>
      <Text style={styles.label}>{item.text}</Text>
    </Animated.View>
  );
};

const scaleAnimation = (transX, index) => {
  "worklet";

  return interpolate(
    transX.value,
    [
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
      (index + 2) * ITEM_WIDTH,
    ],
    [0.5, 0.7, 1, 0.7, 0.5],
    Extrapolate.CLAMP
  );
};

const opacityAnimation = (transX, index) => {
  "worklet";

  return interpolate(
    transX.value,
    [
      (index - 3) * ITEM_WIDTH,
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
      (index + 2) * ITEM_WIDTH,
      (index + 3) * ITEM_WIDTH,
    ],
    [0, 0.5, 0.8, 1, 0.8, 0.5, 0],
    Extrapolate.CLAMP
  );
};

const rotateAnimation = (transX, index) => {
  "worklet";

  return interpolate(
    transX.value,
    [
      (index - 3) * ITEM_WIDTH,
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
      (index + 2) * ITEM_WIDTH,
      (index + 3) * ITEM_WIDTH,
    ],
    [90, 100, 180, 230, 280, 310, 360],
    Extrapolate.CLAMP
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efefef",
  },
  listContainer: {
    height: ITEM_WIDTH + 250,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    height: ITEM_WIDTH * 2,
    flexGrow: 0,
    paddingHorizontal: ITEM_WIDTH * 2,
  },
  box: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    backgroundColor: "blue",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  label: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
});
