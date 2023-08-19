import {StyleSheet} from "react-native";

const createStyles = (containerHeight: number, rotatesContainer: number) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: containerHeight,
      transform: [{rotate: `${130}deg`}],
    },
    textContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
      // width: 56,
    },
    progressText: {
      fontSize: 18.9,
      fontWeight: "bold",
      color: "#2C2D2E",
      textAlign: "right",
    },
    present: {
      fontSize: 13,
      fontWeight: "bold",
      color: "#2C2D2E",
      textAlign: "center",
      paddingBottom: 3,
    },
    circlesContainer: {
      position: "absolute",
      ...{
        transform: [{rotate: `${rotatesContainer}deg`}],
        borderRadius: containerHeight / 2,
      },
    },
  });
export {createStyles};
