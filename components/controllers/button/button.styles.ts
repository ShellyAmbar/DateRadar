import {GlobalColors} from "@traveloffline/styles/global-colors";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: "transparent",
    borderRadius: 16,
    width: "100%",
    paddingVertical: 12,
  },
  disabledButton: {
    borderColor: GlobalColors.Border,
    backgroundColor: GlobalColors.Border,
    shadowRadius: 10,
    shadowColor: GlobalColors.Shades.primary,
    shadowOpacity: 1,
    elevation: 5,
  },
  disabledText: {
    color: GlobalColors.TextColors.secondary,
  },
  text: {
    color: GlobalColors.TextColors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 1,
  },
  linearGradiantBackground: {
    position: "absolute",
    left: -1,
    right: -1,
    top: -2,
    bottom: -2,
    zIndex: 0,
    borderRadius: 16,
    shadowRadius: 10,
    shadowColor: GlobalColors.Shades.primary,
    shadowOpacity: 1,
    elevation: 5,
  },
});
