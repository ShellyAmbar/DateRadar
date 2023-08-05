import React, {useEffect, useState} from "react";
import {
  Direction,
  ScrollItem,
} from "../sliding-bottom-sheet-with-scrolls/carusel-view/interfaces";
import SlidingBottomSheetWithScrolls from "../sliding-bottom-sheet-with-scrolls/sliding-bottom-sheet-with-scrolls";

const PlacesListsView = ({...props}: PlacesListsViewProps) => {
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
  return <SlidingBottomSheetWithScrolls scrolls={scrolls} />;
};

export default PlacesListsView;
