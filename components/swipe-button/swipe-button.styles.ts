import {GlobalColors} from "@traveloffline/styles/global-colors";
import {StyleSheet} from "react-native";
const createStyles = ({
  BUTTON_HEIGHT,
  BUTTON_WIDTH,
  BUTTON_PADDING,
  SWIPEABLE_DIMENSIONS,
}) =>
  StyleSheet.create({
    swipeCont: {
      overflow: "hidden",
      height: BUTTON_HEIGHT,
      width: BUTTON_WIDTH,
      backgroundColor: GlobalColors.BgColors.Bg3,
      borderRadius: BUTTON_HEIGHT,
      padding: BUTTON_PADDING,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      shadowColor: "#FFFF",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 5,

      elevation: 1,
    },
    colorWave: {
      position: "absolute",
      left: 0,
      height: BUTTON_HEIGHT,
      borderRadius: BUTTON_HEIGHT,
      shadowColor: "#FFFF",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 7,
      backgroundColor: "#FFF",

      elevation: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    swipeable: {
      position: "absolute",
      left: BUTTON_PADDING,
      height: SWIPEABLE_DIMENSIONS,
      width: SWIPEABLE_DIMENSIONS,
      borderRadius: SWIPEABLE_DIMENSIONS,
      zIndex: 3,
    },
    swipeText: {
      alignSelf: "center",
      fontSize: 25,
      fontWeight: "bold",
      zIndex: 2,
      color: GlobalColors.TextColors.white,
      textShadowColor: GlobalColors.Brand.fourth,
      textShadowRadius: 20,
      textShadowOffset: {
        width: 0,
        height: 0,
      },
      elevation: 20,
    },
    swipeTextOut: {
      alignSelf: "center",
      fontSize: 25,
      fontWeight: "bold",
      zIndex: 3,
      textAlign: "center",
      color: GlobalColors.TextColors.white,

      textShadowColor: GlobalColors.TextColors.white,
      textShadowRadius: 20,
      textShadowOffset: {
        width: 0,
        height: 0,
      },
      elevation: 20,
    },
  });
export {createStyles};
