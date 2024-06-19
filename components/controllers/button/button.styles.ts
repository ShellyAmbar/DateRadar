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
    borderColor: GlobalColors.TextColors.secondary,
  },
  disabledText: {
    color: GlobalColors.TextColors.secondary,
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
