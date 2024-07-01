import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAlbum } from "src/api/hooks/useAlbum";
import ImageComponent from "src/components/atoms/image/image.component";
import ModalComponent from "src/components/atoms/modal/modal.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import AlbumView from "src/views/album/album.view";
import AlbumSwipeView from "src/views/album/albumswipe.view";

const AlbumContainer = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, isError, isSuccess } = useGetAlbum(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPictureIndex, setSelectedPictureIndex] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    if (selectedPictureIndex) {
      setIsModalOpen(true);
    }
  }, [selectedPictureIndex]);

  return (
    <>
      <Stack.Screen
        options={{
          title: isSuccess && data.name,
        }}
      />
      <SafeAreaView>
        <ShowLoadedComponent
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
        >
          <AlbumView data={data} setImageSelected={setSelectedPictureIndex} />

          <ModalComponent isOpen={isModalOpen}>
            <AlbumSwipeView
              onClose={() => setIsModalOpen(false)}
              data={data}
              selectedPictureIndex={selectedPictureIndex}
            />
          </ModalComponent>
        </ShowLoadedComponent>
      </SafeAreaView>
    </>
  );
};

export default AlbumContainer;
