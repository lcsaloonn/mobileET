import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "src/components/molecules/header/header.component";
import AlbumCategoryView from "src/views/albums/albumsCategory.view";

const AlbumsStack = () => {
  return (
    <SafeAreaView>
      <HeaderComponent />
      <View className="px-4 pt-3">
        <AlbumCategoryView />
      </View>
    </SafeAreaView>
  );
};

export default AlbumsStack;
