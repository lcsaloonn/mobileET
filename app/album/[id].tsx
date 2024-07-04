import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAlbum } from "src/api/hooks/useAlbum";
import { useGetAlbumPictures } from "src/api/hooks/useGetAlbumPictures";
import { ViewContainer } from "src/components/atoms/containers/z-index";
import ModalComponent from "src/components/atoms/modal/modal.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import AlbumView from "src/views/album/album.view";
import AlbumModalView from "src/views/album/albumModal.view";

const AlbumContainer = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, isError, isSuccess } = useGetAlbumPictures(id);
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
          title: isSuccess && data.albumName,
        }}
      />
      <SafeAreaView>
        <ShowLoadedComponent
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
        >
          <ViewContainer>
            <AlbumView data={data} setImageSelected={setSelectedPictureIndex} />
          </ViewContainer>

          <ModalComponent isOpen={isModalOpen}>
            <AlbumModalView
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
