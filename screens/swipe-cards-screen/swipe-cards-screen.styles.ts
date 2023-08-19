import {StyleSheet} from "react-native";
import {GlobalColors} from "../../styles/global-colors";
import {height, width} from "@traveloffline/styles/styles";
export default StyleSheet.create({
  container: {
    backgroundColor: GlobalColors.BgColors.Bg2,
    paddingHorizontal: 16,
    width: width,
    height: height,
    flexDirection: "column",
  },
  stack: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flex: 1,
  },
});
