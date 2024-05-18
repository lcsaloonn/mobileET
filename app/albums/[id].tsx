import AlbumHeaderButtons from "components/molecules/albumHeaderButtons/albumHeaderButtons.component";
import ImageComponent from "components/atoms/image/image.component";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

const AlbumView = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const categories = ["gallery", "moments", "map"] as const;
  type Categories = (typeof categories)[number];
  const [selectedType, setSelectedTyped] = useState<string>(categories[0]);

  const map: { [key in Categories]: JSX.Element } = {
    gallery: (
      <FlatList
        data={test}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ index, item }) => (
          <ImageComponent picture={item.mainPicture} className="mx-auto my-1" />
        )}
      />
    ),

    moments: (
      <Text
        className="text-3xl font-pblack text-center  mt-28"
        style={{
          textAlignVertical: "center",
        }}
      >
        Not Available for the moment
      </Text>
    ),
    map: (
      <Text
        className="text-3xl font-pblack text-center mt-28"
        style={{
          textAlignVertical: "center",
        }}
      >
        Not Available for the moment
      </Text>
    ),
  };

  return (
    <View>
      <Stack.Screen options={{ headerTitle: id }} />
      <View>
        <AlbumHeaderButtons
          selectedType={(name) => setSelectedTyped(name)}
          catgories={categories as [string, string, string]}
          defaultIndexSelection={0}
        />
        <View className="h-full mt-7">{map[selectedType]}</View>
      </View>
    </View>
  );
};

export default AlbumView;
