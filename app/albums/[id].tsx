import AlbumHeaderButtons from "components/molecules/albumHeaderButtons/albumHeaderButtons.component";
import ImageComponent from "components/atoms/image/image.component";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import WorkInProgressComponent from "components/atoms/workInProgress/workInProgress.componant";
import { albumsMock } from "mocks/albums.mock";

const AlbumView = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const categories = ["gallery", "moments", "map"] as const;
  type Categories = (typeof categories)[number];
  const [selectedType, setSelectedTyped] = useState<string>(categories[0]);

  const map: { [key in Categories]: JSX.Element } = {
    gallery: (
      <FlatList
        data={albumsMock}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ index, item }) => (
          <ImageComponent picture={item.mainPicture} className="mx-auto my-1" />
        )}
      />
    ),

    moments: <WorkInProgressComponent />,
    map: <WorkInProgressComponent />,
  };

  return (
    <View>
      <Stack.Screen options={{ headerTitle: id }} />
      <View className="my-7 mx-5">
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
