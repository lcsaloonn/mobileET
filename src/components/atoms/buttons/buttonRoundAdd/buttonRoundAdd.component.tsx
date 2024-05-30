import { Pressable, StyleSheet, Text } from "react-native";

const ButtonRoundAdd = () => {
  return (
    <Pressable className="bg-primary" style={styles.btn}>
      <Text className="text-white" style={styles.text}>
        +
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    zIndex: 1,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
export default ButtonRoundAdd;
