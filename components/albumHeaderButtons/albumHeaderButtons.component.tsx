import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type TAlbumHeaderButtons = {
  selectedType: (name: string) => void;
  catgories: [string, string, string];
  defaultIndexSelection: 0 | 1 | 2;
};

const AlbumHeaderButtons = ({
  selectedType,
  catgories,
  defaultIndexSelection,
}: TAlbumHeaderButtons) => {
  const [selectedButton, setSelectedButton] = useState(defaultIndexSelection);
  const btnPress = (index: 0 | 1 | 2, categorie: string) => {
    setSelectedButton(index);
    selectedType(categorie);
  };
  return (
    <View className="justify-between flex-row">
      {catgories.map((element, index: 0 | 1 | 2) => (
        <TouchableOpacity
          className={`${
            selectedButton == index ? "bg-primary" : " bg-gray-300"
          }`}
          style={styles.button}
          key={index}
          onPress={() => btnPress(index, element)}
        >
          <Text className="text-white text-center capitalize">{element}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: { borderRadius: 50, padding: 10, width: 100 },
});

export default AlbumHeaderButtons;
