import { useQuery } from "@tanstack/react-query";

import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { getPictureByAlbumId } from "src/api/queries/album.api";
import ButtonRoundAdd from "src/components/atoms/buttons/buttonRoundAdd/buttonRoundAdd.component";
import WorkInProgressComponent from "src/components/atoms/workInProgress/workInProgress.componant";
import { AlbumGalleryComponent } from "src/components/molecules/SingleAlbum";
import AlbumHeaderButtons from "src/components/molecules/albumHeaderButtons/albumHeaderButtons.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";

const categories = ["gallery", "moments", "map"] as const;
type Categories = (typeof categories)[number];

const AlbumView = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedType, setSelectedTyped] = useState<Categories>(categories[0]);

  const pictureQuery = useQuery({
    queryKey: ["pictures"],
    queryFn: () => getPictureByAlbumId(id),
  });

  const component: { [key in Categories]: JSX.Element } = {
    gallery: pictureQuery.isSuccess ? (
      <AlbumGalleryComponent
        pictures={pictureQuery.data.pictures}
        folder={pictureQuery.data.folderUrl}
      />
    ) : (
      <></>
    ),
    moments: <WorkInProgressComponent />,
    map: <WorkInProgressComponent />,
  };

  return (
    <View className="h-full">
      <Stack.Screen options={{ headerTitle: "todo" }} />
      <View className="my-7 mx-5 h-full ">
        <AlbumHeaderButtons
          selectedType={(name: Categories) => setSelectedTyped(name)}
          catgories={categories as [string, string, string]}
          defaultIndexSelection={0}
        />
        <ShowLoadedComponent query={pictureQuery}>
          <View className="mt-7">{component[selectedType]}</View>
        </ShowLoadedComponent>
        <ButtonRoundAdd />
      </View>
    </View>
  );
};

export default AlbumView;
