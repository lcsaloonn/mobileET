import { router } from "expo-router";
import { FlatList, Pressable, View, Text } from "react-native";
import AlbumMiniatureComponent from "../../albumMiniature/albumMiniature.component";
import { TAlbum } from "types/album.type";

type TAlbumListCategoryComponent = {
  categoryName: string;
  albums: TAlbum[];
};

const AlbumListCategoryComponent = ({
  categoryName,
  albums,
}: TAlbumListCategoryComponent) => {
  return (
    <View>
      <View className="flex-row items-baseline justify-between">
        <Text className="text-lg font-medium">{categoryName}</Text>
        <Text className="text-xs font-medium">{"view all"}</Text>
      </View>

      <FlatList
        horizontal={true}
        data={albums}
        keyExtractor={(item) => item.id}
        // numColumns={3}
        renderItem={({ index, item }) => (
          <View className="mr-7 my-2 w-24 ">
            {/* <Link
            className=" bg-gray-300 text-gray-500"
            style={{
              fontSize: 50,
              textAlignVertical: "center",
              height: 100,
              textAlign: "center",
              borderRadius: 10,
            }}
            href={"screens/create"}
          >
            +
          </Link> */}

            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/albums/[id]",
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
        )}
      />
    </View>
  );
};
export default AlbumListCategoryComponent;
