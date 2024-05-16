import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const catgories = ["Gallery", "Moments", "Map"];

const AlbumHeaderButtons = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const btnPress = (index: number) => setSelectedButton(index);
  return (
    <View className="justify-between flex-row">
      {catgories.map((element, index) => (
        <TouchableOpacity
          className={`${
            selectedButton == index ? "bg-primary" : " bg-gray-300"
          }`}
          style={styles.button}
          key={index}
          onPress={() => btnPress(index)}
        >
          <Text className="text-white text-center">{element}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: { borderRadius: 50, padding: 10, width: 100 },
});

export default AlbumHeaderButtons;
