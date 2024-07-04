import { router } from "expo-router";
import { FlatList, Pressable, View, Text } from "react-native";
import AlbumMiniatureComponent from "../../albumMiniature/albumMiniature.component";
import { TAlbum } from "types/album.type";

type TAlbumListCategoryComponent = {
  categoryName: string;
  albums: TAlbum[];
  numberMaxOfItem?: number;
};

const AlbumListCategoryComponent = ({
  categoryName,
  albums,
  numberMaxOfItem = 10,
}: TAlbumListCategoryComponent) => {
  return (
    <View className="pb-4">
      <View className="flex-row items-baseline justify-between">
        <Text className="text-lg font-medium capitalize">{categoryName}</Text>
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/albums/[id]",
              params: { id: categoryName },
            })
          }
        >
          <Text className="text-xs font-medium capitalize">{"view all"}</Text>
        </Pressable>
      </View>

      <FlatList
        horizontal={true}
        data={albums}
        keyExtractor={(item) => item.id}
        renderItem={({ index, item }) =>
          index < numberMaxOfItem && (
            <View className="mr-7 my-2 w-24 ">
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/album/[id]",
                    params: { id: item.id },
                  })
                }
              >
                <AlbumMiniatureComponent
                  albumName={item.name}
                  numberOfPictures={item.numberOfPictures}
                  picture={item.folderUrl + item.mainPicture}
                />
              </Pressable>
            </View>
          )
        }
      />
    </View>
  );
};
export default AlbumListCategoryComponent;
