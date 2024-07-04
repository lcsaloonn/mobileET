import { Link, router } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import AlbumMiniatureComponent from "src/components/molecules/albumMiniature/albumMiniature.component";
import { TAlbum } from "types/album.type";

type TAlbumCategoryView = {
  albums: TAlbum[];
};

const AlbumCategoryView = ({ albums }: TAlbumCategoryView) => {
  return (
    <>
      <Link
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
      </Link>
      <FlatList
        contentContainerStyle={{ margin: "auto" }}
        columnWrapperStyle={{ gap: 3 }}
        numColumns={3}
        data={albums}
        keyExtractor={(item) => item.id}
        renderItem={({ index, item }) => (
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
        )}
      />
    </>
  );
};
export default AlbumCategoryView;
