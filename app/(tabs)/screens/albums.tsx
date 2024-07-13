import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAlbums } from "src/api/hooks/useAlbums";
import HeaderComponent from "src/components/molecules/header/header.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import AlbumCategoryListView from "src/views/albums/albumsCategoryList.view";

const AlbumsStack = () => {
  const { data, isLoading, isError, isSuccess } = useGetAlbums();
  return (
    <SafeAreaView>
      <HeaderComponent />
      <View className="px-4 pt-3">
        <ShowLoadedComponent
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
        >
          {isSuccess && <AlbumCategoryListView albums={data} />}
        </ShowLoadedComponent>
      </View>
    </SafeAreaView>
  );
};

export default AlbumsStack;
