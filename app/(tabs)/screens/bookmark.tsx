import { Text, FlatList, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import AlbumMiniatureComponent from "components/albumMiniature/albumMiniature.component";

const test = [
  {
    id: " 1",
    name: "thomas",
  },
  {
    id: "2",
    name: "thomas",
  },
  {
    id: "3",
    name: "thomas",
  },
  {
    id: "4",
    name: "thomas",
  },
  {
    id: "5",
    name: "thomas",
  },
  {
    id: "6",
    name: "thomas",
  },
  {
    id: "7",
    name: "thomas",
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
                <TouchableOpacity
                  className=" bg-gray-300"
                  style={{
                    height: 100,
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <Text
                    className="text-gray-500"
                    style={{
                      fontSize: 50,
                      textAlign: "center",
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              ) : (
                <AlbumMiniatureComponent
                  albumName={item.name}
                  numberOfImage={10}
                  image={"/"}
                />
              )}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
