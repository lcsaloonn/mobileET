import { StyleSheet } from "react-native";

const storyHeaderStyles = StyleSheet.create({
  timeBarContainer: {
    height: 3,
    width: "95%",
    borderWidth: 1,
    backgroundColor: "gray",
    position: "absolute",
    top: 18,
  },
  timeBar: { height: "100%", backgroundColor: "white", width: "50%" },
  infoBarContainer: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 12,
    left: 0,
    width: "90%",
  },
  imgContainer: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    borderRadius: 100,
    backgroundColor: "orange",
    resizeMode: "cover",
    width: "92%",
    height: "92%",
  },
  infoContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  name: {
    color: "white",
    fontSize: 15,
    paddingLeft: 10,
    textTransform: "capitalize",
  },
  closeBtn: { fontSize: 20, color: "white", opacity: 0.6 },
});

export default storyHeaderStyles;
