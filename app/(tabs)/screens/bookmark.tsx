import { FlatList, View, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AlbumMiniatureComponent from "components/molecules/albumMiniature/albumMiniature.component";
import { Link, router } from "expo-router";
import { albumsMock } from "mocks/albums.mock";

const Bookmark = () => {
  const albumList = [
    { id: "0", name: "", mainPicture: "", numberOfImage: 0 },
    ...albumsMock,
  ];
  return (
    <SafeAreaView className="h-full m-auto">
      <View>
        <FlatList
          data={albumList}
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
                    numberOfImage={item.numberOfImage}
                    image={item.mainPicture}
                  />
                </Pressable>
              )}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
