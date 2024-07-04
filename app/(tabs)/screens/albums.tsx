import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "src/components/molecules/header/header.component";
import AlbumCategoryListView from "src/views/albums/albumsCategoryList.view";

const AlbumsStack = () => {
  return (
    <SafeAreaView>
      <HeaderComponent />
      <View className="px-4 pt-3">
        <AlbumCategoryListView />
      </View>
    </SafeAreaView>
  );
};

export default AlbumsStack;
