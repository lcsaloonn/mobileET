import { Link, router } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import AlbumMiniatureComponent from "src/components/molecules/albumMiniature/albumMiniature.component";
import { TAlbum } from "types/album.type";

type TAlbumCategoryView = {
  albums: TAlbum[];
};

const AlbumCategoryView = ({ albums }: TAlbumCategoryView) => {
  const list = [{ id: "0" }, ...albums] as TAlbum[];
  return (
    <FlatList
      columnWrapperStyle={{ gap: 10 }}
      contentContainerStyle={{ gap: 10 }}
      numColumns={3}
      data={list}
      keyExtractor={(item) => item.id}
      renderItem={({ index, item }) => (
        <View className=" ">
          {index === 0 ? (
            <Link
              className=" bg-gray-300 text-gray-500"
              style={{
                fontSize: 50,
                textAlignVertical: "center",
                height: 110,
                width: 110,
                textAlign: "center",
                borderRadius: 10,
              }}
              href={"screens/create"}
            >
              +
            </Link>
          ) : (
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
          )}
        </View>
      )}
    />
  );
};
export default AlbumCategoryView;
