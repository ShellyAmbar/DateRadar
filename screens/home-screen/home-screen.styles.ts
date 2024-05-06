import {StyleSheet} from "react-native";
import {GlobalColors} from "../../styles/global-colors";
export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: GlobalColors.BgColors.Bg1,
  },
  searchBarContainer: {
    position: "absolute",
    start: 0,
    end: 0,
    top: 0,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
