import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAlbums } from "src/api/hooks/useAlbums";
import HeaderComponent from "src/components/molecules/header/header.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import AlbumCategoryListTemplate from "src/components/molecules/views/albums/albumsCategoryList.template";

const AlbumsStack = () => {
  const { data, isLoading, isSuccess } = useGetAlbums();
  return (
    <SafeAreaView>
      <HeaderComponent />
      <View className="px-4 pt-3">
        <ShowLoadedComponent isLoading={isLoading} isSuccess={isSuccess}>
          <AlbumCategoryListTemplate albums={data} />
        </ShowLoadedComponent>
      </View>
    </SafeAreaView>
  );
};

export default AlbumsStack;
