import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAlbum } from "src/api/hooks/useAlbum";
import ImageComponent from "src/components/atoms/image/image.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";

const AlbumView = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, isError, isSuccess } = useGetAlbum(id);

  return (
    <>
      <Stack.Screen
        options={{
          title: isSuccess && data.name,
        }}
      />
      <SafeAreaView>
        <ShowLoadedComponent
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
        >
          <View className="px-4">
            {isSuccess && (
              <FlatList
                contentContainerStyle={{ gap: 5, margin: "auto" }}
                columnWrapperStyle={{ gap: 10 }}
                data={data.pictures}
                numColumns={3}
                keyExtractor={(item) => item}
                renderItem={({ index, item }) => (
                  <ImageComponent
                    picture={item}
                    pictureFolder={data.folderUrl}
                    defaultStyle={true}
                  />
                )}
              />
            )}
          </View>
          <Text>ici</Text>
          <ImageComponent
            picture={"t3.jpg"}
            pictureFolder={"/programs/DB/etom_album_db/memories"}
            defaultStyle={true}
          />
        </ShowLoadedComponent>
      </SafeAreaView>
    </>
  );
};

export default AlbumView;
