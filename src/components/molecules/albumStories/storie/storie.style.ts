import { StyleSheet } from "react-native";

const stoieStyles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: "#000",
  },
  backgroundImg: {
    resizeMode: "cover",
    borderRadius: 18,
  },
  view: {},
  progressbarContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: "center",
    height: 3,
    backgroundColor: "transparent",
  },
  progressbarBackground: {
    flex: 1,
    height: 3,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginHorizontal: 2,
  },
  progressbar: {
    height: 3,
    backgroundColor: "white",
  },
  container: {},
});

export default stoieStyles;
