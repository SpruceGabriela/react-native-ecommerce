import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    minWidth: 20,
    backgroundColor: "#bf4345",
    padding: 4,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: -10,
    top: -5,
    zIndex: 9,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});
