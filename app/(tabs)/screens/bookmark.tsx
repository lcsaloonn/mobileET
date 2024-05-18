import {
  Text,
  FlatList,
  View,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AlbumMiniatureComponent from "components/albumMiniature/albumMiniature.component";
import { Link, router } from "expo-router";

const test = [
  {
    id: "0",
  },
  {
    id: " 1",
    name: "thomas",
    mainPicture: "mocks/albums/t1.jpg",
  },
  {
    id: "2",
    name: "thomas",
    mainPicture: "mocks/albums/t2.jpg",
  },
  {
    id: "3",
    name: "thomas",
    mainPicture: "mocks/albums/t3.jpg",
  },
  {
    id: "4",
    name: "thomas",
    mainPicture: "mocks/albums/t4.jpg",
  },
  {
    id: "5",
    name: "thomas",
    mainPicture: "mocks/albums/t5.jpg",
  },
  {
    id: "6",
    name: "thomas",
    mainPicture: "mocks/albums/t6.jpg",
  },
  {
    id: "7",
    name: "thomas",
    mainPicture: "mocks/albums/t7.jpg",
  },
];

const Bookmark = () => {
  return (
    <SafeAreaView className="h-full m-auto">
      <View>
        <FlatList
          data={test}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ index, item }) => (
            <View className="m-3 w-24 ">
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
                      params: { id: "2" },
                    })
                  }
                >
                  <AlbumMiniatureComponent
                    albumName={item.name}
                    numberOfImage={10}
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
