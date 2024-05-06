import {StyleSheet} from "react-native";

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
  },
  searchbar: {
    borderRadius: 16,
    borderColor: "#D7D9DE",
    borderWidth: 1,
    width: "100%",
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  input: {
    alignItems: "center",
    width: "100%",
    zIndex: 0,
  },
  search_icon: {
    position: "absolute",
    start: 5,
    zIndex: 1,
  },
  delete_icon: {
    position: "absolute",
    end: 15,
    zIndex: 1,
  },
  spacer: {
    height: 12,
  },
  list: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 10,
    height: 100,
  },
});

export default style;
