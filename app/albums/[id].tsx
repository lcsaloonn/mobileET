import { useQuery } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAlbumsByCategory } from "src/api/hooks/useGetAlbumByCategory";
import ViewContainer from "src/components/atoms/containers/viewContainer";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import AlbumCategoryView from "src/views/albums/albumsCategory.view";
import AlbumCategoryListView from "src/views/albums/albumsCategoryList.view";

const AlbumsView = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, isError, isSuccess } = useGetAlbumsByCategory(id);

  return (
    <SafeAreaView>
      <ViewContainer>
        <ShowLoadedComponent
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
        >
          <AlbumCategoryView albums={data} />
        </ShowLoadedComponent>
      </ViewContainer>
    </SafeAreaView>
  );
};

export default AlbumsView;
