import React, {useEffect, useState} from "react";
import MapView from "../../components/map-view/map-view";
import {Box} from "../../components/controllers/box/box";
import Styles from "./home-screen.styles";
import SlidingBottomSheetWithScrolls from "@traveloffline/components/sliding-bottom-sheet-with-scrolls/sliding-bottom-sheet-with-scrolls";
import {
  Direction,
  ScrollItem,
} from "@traveloffline/components/sliding-bottom-sheet-with-scrolls/interfaces";

const HomeScreen = () => {
  const [scrolls, setscrolls] = useState<ScrollItem[]>([]);

  useEffect(() => {
    setscrolls([
      {
        list: [
          {
            title: "Jimmy who?",
            subTitle: "rotshild 7",
            image: "",
            index: 1,
            onPress: () => {},
          },
          {
            title: "Kapella",
            subTitle: "rotshild 9",
            image: "",
            index: 2,
            onPress: () => {},
          },
          {
            title: "Jimmy who?",
            subTitle: "rotshild 7",
            image: "",
            index: 3,
            onPress: () => {},
          },
        ],
        index: 1,
        direction: Direction.Horizontal,
      },
      {
        list: [
          {
            title: "Jimmy who?",
            subTitle: "rotshild 7",
            image: "",
            index: 1,
            onPress: () => {},
          },
          {
            title: "Kapella",
            subTitle: "rotshild 9",
            image: "",
            index: 2,
            onPress: () => {},
          },
          {
            title: "Jimmy who?",
            subTitle: "rotshild 7",
            image: "",
            index: 3,
            onPress: () => {},
          },
        ],
        index: 2,
        direction: Direction.Vertical,
      },
    ]);
  }, []);

  return (
    <Box style={Styles.container}>
      <MapView />

      <SlidingBottomSheetWithScrolls scrolls={scrolls} />
    </Box>
  );
};

export default HomeScreen;
