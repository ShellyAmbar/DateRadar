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
  buttonStart: {
    backgroundColor: GlobalColors.Brand.secondary,
    height: 90,
    width: 90,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: GlobalColors.TextColors.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 5,
  },
  buttonStartText: {
    textShadowColor: GlobalColors.Brand.thierd,
    textShadowRadius: 20,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 0,
    color: GlobalColors.TextColors.white,
    fontSize: 22,
  },
});
