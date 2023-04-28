import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 100,
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    backgroundColor: "lightgray",
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
