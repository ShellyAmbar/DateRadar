import {StyleSheet} from "react-native";
import {HebrewStyle} from "@traveloffline/styles/styles";
import {GlobalColors} from "@traveloffline/styles/global-colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  checkbox: {
    borderRadius: 6,
    height: 24,
    width: 24,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  containerCheck: {
    backgroundColor: GlobalColors.Brand.primary,
    borderColor: "transparent",
  },
  containerUnCheck: {
    borderColor: GlobalColors.Border,
    backgroundColor: "transparent",
  },
  label: {
    ...HebrewStyle.BodyText1,
  },
});
