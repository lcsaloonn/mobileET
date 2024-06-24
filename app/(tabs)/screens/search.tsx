import { FlatList, View, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getAllAlbum } from "src/api/queries/album.api";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import AlbumMiniatureComponent from "src/components/molecules/albumMiniature/albumMiniature.component";

const Bookmark = () => {
  const albumsQuery = useQuery({
    queryKey: ["albums"],
    queryFn: () => getAllAlbum(),
  });

  return (
    <SafeAreaView className="h-full m-auto">
      <ShowLoadedComponent query={albumsQuery}>
        <View>
          <FlatList
            data={albumsQuery.data}
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
                      albumName={item.albumName}
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
    </SafeAreaView>
  );
};

export default Bookmark;
