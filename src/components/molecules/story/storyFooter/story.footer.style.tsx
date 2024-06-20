import { StyleSheet } from "react-native";

const storyFooterStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 30,
    width: "100%",
  },
  input: {
    borderColor: "white",
    borderRadius: 20,
    width: "85%",
    height: 50,
    paddingLeft: 20,
    borderWidth: 0.5,
    fontSize: 16,
    color: "white",
  },
  actionBtn: {
    fontSize: 28,
    color: "white",
  },
});
export default storyFooterStyles;
