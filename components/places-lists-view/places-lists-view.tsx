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
            title: "Molly Blooms מולי בלומס",
            subTitle: "פאב אירי",
            rate: 4.5,
            image: require("@traveloffline/assets/images/pub2.jpg"),
            index: 1,
            onPress: () => {},
            location: {latitude: 32.07909, longitude: 34.76815},
            address: "מנדלי מוכר ספרים 2, תל אביב-יפו",
          },
          {
            title: "Mike's Place",
            subTitle: "בר",
            rate: 4.5,
            image: require("@traveloffline/assets/images/pub2.jpg"),
            index: 2,
            onPress: () => {},
            location: {latitude: 32.07909, longitude: 34.76815},
            address: "רציף הרברט סמואל 90, תל אביב-יפו",
          },
          {
            title: "TEDER.FM ",
            subTitle: "פאב אירי",
            rate: 4.5,
            image: require("@traveloffline/assets/images/pub2.jpg"),
            index: 3,
            onPress: () => {},
            location: {latitude: 32.06035, longitude: 34.76931},
            address: "South Tel Aviv | Derech Jaffa 9",
          },
        ],
        index: 1,
        direction: Direction.Horizontal,
      },
      {
        list: [
          {
            title: "Kuli Alma",
            subTitle: "Voted the best bar in Tel Aviv!",
            rate: 4.5,
            image: require("@traveloffline/assets/images/pub2.jpg"),
            index: 1,
            onPress: () => {},
            location: {latitude: 32.02832, longitude: 34.78188},
            address: "Central Tel Aviv – Mikveh Israel 10",
          },
          {
            title: " Jimmy Who",
            subTitle:
              "Hidden in a nondescript building on Tel Aviv’s famous Rothschild Boulevard",
            rate: 4.5,
            image: require("@traveloffline/assets/images/pub2.jpg"),
            index: 2,
            onPress: () => {},
            location: {latitude: 32.06299, longitude: 34.772},
            address: "Rothschild Boulevard 24, Tel Aviv-Yafo",
          },
          {
            title: "Emesh",
            subTitle: "Emesh is a unique party bar in Tel Aviv!",
            rate: 4.5,
            image: require("@traveloffline/assets/images/pub2.jpg"),
            index: 3,
            onPress: () => {},
            location: {latitude: 32.06214, longitude: 34.77085},
            address: "Lilienblum Street 30, Tel Aviv-Yafo",
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
