import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  root: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  textInput: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.01,
    fontSize: 1,
    ...Platform.select({
      web: {
        width: "100%",
        fontSize: 16,
      },
    }),
  },
});
export default styles;
