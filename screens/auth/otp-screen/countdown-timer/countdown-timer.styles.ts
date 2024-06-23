import {StyleSheet} from "react-native";
const styles = ({width, height}: {width: number; height: number}) =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      height: height,
    },
    textView: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });
export default styles;
