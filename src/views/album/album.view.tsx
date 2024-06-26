import { View, FlatList, Pressable } from "react-native";
import { useGetAlbum } from "src/api/hooks/useAlbum";
import ImageComponent from "src/components/atoms/image/image.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import { TAlbum } from "types/album.type";

type TAlbumView = {
  data: TAlbum;
  setImageSelected?: React.Dispatch<React.SetStateAction<number>>;
};
const AlbumView = ({ data, setImageSelected }: TAlbumView) => {
  return (
    <View className="px-4">
      <FlatList
        contentContainerStyle={{ gap: 5, margin: "auto" }}
        columnWrapperStyle={{ gap: 10 }}
        data={data.pictures}
        numColumns={3}
        keyExtractor={(item) => item}
        renderItem={({ index, item }) => (
          <Pressable onPress={() => setImageSelected?.(index)}>
            <ImageComponent
              picture={item}
              pictureFolder={data.folderUrl}
              defaultStyle={true}
            />
          </Pressable>
        )}
      />
    </View>
  );
};
export default AlbumView;
