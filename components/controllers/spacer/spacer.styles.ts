import {StyleSheet} from "react-native";

export const createStyle = (size: number, isVertical: boolean) => {
  return StyleSheet.create({
    container: {
      ...(isVertical
        ? {
            marginTop: size,
            width: "100%",
          }
        : {marginEnd: size}),

      justifyContent: "center",
      alignItems: "center",
    },
  });
};
