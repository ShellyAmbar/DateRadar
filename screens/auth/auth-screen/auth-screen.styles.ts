import {GlobalColors} from "@traveloffline/styles/global-colors";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.BgColors.Bg8,
  },
  centerHorizontal: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: GlobalColors.TextColors.white,
    fontSize: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    top: 160,
    backgroundColor: GlobalColors.BgColors.Bg4,
    paddingVertical: 60,
  },

  absoluteButtons: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    paddingHorizontal: 30,
  },
  buttonStyle: {
    width: "100%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: GlobalColors.TextColors.white,
    alignSelf: "center",
  },

  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  bottomBorderTextBtn: {
    color: GlobalColors.TextColors.white,
    borderColor: "#FFF",
    borderBottomWidth: 1,
  },
  text: {color: GlobalColors.TextColors.white},
});
