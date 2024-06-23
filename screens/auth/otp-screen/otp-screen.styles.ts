import {GlobalColors} from "@traveloffline/styles/global-colors";
import {width} from "@traveloffline/styles/styles";
import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    // alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: GlobalColors.BgColors.Bg3,
  },
  horizontal: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonLeft: {
    alignSelf: "flex-start",
  },
  textInput: {
    paddingVertical: 5,
    backgroundColor: "transparent",
    borderColor: "#FFFF",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    color: "#FFFF",
    paddingHorizontal: 0,
    borderRadius: 0,
  },
  lable: {
    color: GlobalColors.TextColors.white,
    fontSize: 14,
    marginBottom: 0,
    paddingHorizontal: 0,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "center",
  },
  bottomView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 16,
  },
  sendAgainText: {
    color: GlobalColors.TextColors.white,
    fontSize: 18,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 40,
    color: GlobalColors.TextColors.white,
  },
});
export default styles;
