import { Link, router } from "expo-router";
import { View, FlatList, Pressable } from "react-native";
import { useGetAlbums } from "src/api/hooks/useAlbums";
import AlbumMiniatureComponent from "src/components/molecules/albumMiniature/albumMiniature.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";

const AlbumView = () => {
  const { data, isLoading, isError, isSuccess } = useGetAlbums();
  return (
    <ShowLoadedComponent
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
    >
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ index, item }) => (
            <View className="mx-3 my-2 w-24 ">
              {index === 0 ? (
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
              ) : (
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
              )}
            </View>
          )}
        />
      </View>
    </ShowLoadedComponent>
  );
};

export default AlbumView;
