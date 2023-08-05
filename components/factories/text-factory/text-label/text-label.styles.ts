import {GlobalColors} from "@traveloffline/styles/global-colors";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
  textLabel: {
    fontFamily: "Segoe UI",
    fontSize: 13,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: "center",
    color: GlobalColors.TextColors.primary,
    backgroundColor: GlobalColors.BgColors.Bg4,
    padding: 8,
    borderRadius: 8,
  },
});
