import { useQuery } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAlbumsByCategory } from "src/api/hooks/useGetAlbumByCategory";
import ViewContainer from "src/components/atoms/containers/viewContainer";
import AlbumCategoryView from "src/views/albums/albumsCategory.view";
import AlbumCategoryListView from "src/views/albums/albumsCategoryList.view";

const AlbumsView = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data } = useGetAlbumsByCategory(id);

  return (
    <SafeAreaView>
      <ViewContainer>
        <AlbumCategoryView albums={data} />
      </ViewContainer>
    </SafeAreaView>
  );
};

export default AlbumsView;
