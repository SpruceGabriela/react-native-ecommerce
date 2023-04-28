import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  cartLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 10,
    marginBottom: 8,
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 8,
  },
  productInfo: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  row: {
    flexDirection: "row",
  },
  cartLineTotal: {
    minHeight: 180,
    flexDirection: "column",
    width: "100%",
    borderTopColor: "white",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    bottom: 0,
    padding: 20,
    paddingBottom: 20,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    padding: 10,
    backgroundColor: "#eeeeee",
  },
});
