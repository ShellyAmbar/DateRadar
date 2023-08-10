import {Dimensions, I18nManager, StyleSheet} from "react-native";
import {GlobalColors} from "@traveloffline/styles/global-colors";
import {height, width} from "@traveloffline/styles/styles";
import {HebrewStyle, EnglishStyle} from "@traveloffline/styles/styles";
let LanguageStyle = I18nManager.isRTL ? HebrewStyle : EnglishStyle;

export default StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  halfCircularRectView: {
    zIndex: 2,
    position: "absolute",
    width: width,
    top: Dimensions.get("screen").height,
    paddingHorizontal: 15,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: GlobalColors.BgColors.Bg1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  end: {
    alignSelf: "flex-start",
    width: 32,
    height: 32,
  },
  title: {
    ...LanguageStyle.H5,
    width: "100%",
    flex: 1,
    textAlign: "center",
    paddingTop: 5,
  },
  top: {
    width: width,
    paddingBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    position: "absolute",
    top: 0,
    flexDirection: "row",
  },
  content: {
    marginTop: 60,
    zIndex: 3,
    width: "100%",
    paddingTop: 8,
  },
});
