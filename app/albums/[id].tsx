import AlbumHeaderButtons from "components/molecules/albumHeaderButtons/albumHeaderButtons.component";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import WorkInProgressComponent from "components/atoms/workInProgress/workInProgress.componant";
import ButtonRoundAdd from "components/atoms/buttons/buttonRoundAdd/buttonRoundAdd.component";
import { useQuery } from "@tanstack/react-query";
import { getPictureByAlbumId } from "api/queries/album.api";
import { AlbumGalleryComponent } from "components/molecules/SingleAlbum";

const categories = ["gallery", "moments", "map"] as const;
type Categories = (typeof categories)[number];

const AlbumView = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const albumsQuery = useQuery({
    queryKey: ["albums"],
    queryFn: () => getPictureByAlbumId(id),
  });

  const [selectedType, setSelectedTyped] = useState<string>(categories[0]);

  const map: { [key in Categories]: JSX.Element } = {
    gallery: <AlbumGalleryComponent pictures={albumsQuery.data} />,

    moments: <WorkInProgressComponent />,
    map: <WorkInProgressComponent />,
  };

  return (
    <View className="h-full">
      <Stack.Screen options={{ headerTitle: albumsQuery.data.name }} />
      <View className="my-7 mx-5 h-full ">
        <AlbumHeaderButtons
          selectedType={(name) => setSelectedTyped(name)}
          catgories={categories as [string, string, string]}
          defaultIndexSelection={0}
        />
        <View className="mt-7">{map[selectedType]}</View>
        <ButtonRoundAdd />
      </View>
    </View>
  );
};

export default AlbumView;
