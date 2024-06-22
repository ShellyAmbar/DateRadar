import {GlobalColors} from "@traveloffline/styles/global-colors";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
  defaultContainer: {
    borderColor: GlobalColors.Border,
    borderWidth: 1,
    borderRadius: 8,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  errorContainer: {
    backgroundColor: GlobalColors.SystemColors.Error2,
    borderColor: GlobalColors.SystemColors.Error,
    borderWidth: 1,
    borderRadius: 8,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 28,
    lineHeight: 39,
    textAlign: "center",
  },
  errorText: {
    color: GlobalColors.SystemColors.Error,
  },
  successText: {
    color: "#00D261",
  },
  successContainer: {
    backgroundColor: "#D7D9DE",
    borderColor: "#00D261",
  },
});
