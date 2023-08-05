import {Dimensions, StyleSheet} from "react-native";
import {GlobalColors} from "../../styles/global-colors";

export default StyleSheet.create({
  container: {
    backgroundColor: GlobalColors.BgColors.Bg2,
    height: 60,
    width: 60,
    borderRadius: 50,
    position: "absolute",
    left: 30,
    bottom: Dimensions.get("screen").height / 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
