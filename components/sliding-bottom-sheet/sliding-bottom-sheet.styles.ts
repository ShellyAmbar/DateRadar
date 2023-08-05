import {StyleSheet} from "react-native";
import {GlobalColors} from "../../styles/global-colors";
import {height} from "../../styles/styles";
export default StyleSheet.create({
  container: {
    backgroundColor: GlobalColors.BgColors.Bg2,
    height: "100%",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    width: "100%",
    position: "absolute",
    top: height,
    justifyContent: "space-between",
  },
  line: {
    alignSelf: "center",
    height: 4,
    backgroundColor: GlobalColors.Brand.thierd,
    width: 80,
    borderRadius: 2,
    marginTop: 8,
    marginBottom: 10,
  },
});
