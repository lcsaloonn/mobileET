import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAlbum } from "src/api/hooks/useAlbum";
import ImageComponent from "src/components/atoms/image/image.component";
import AlbumMiniatureComponent from "src/components/molecules/albumMiniature/albumMiniature.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";

const AlbumView = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, isError, isSuccess } = useGetAlbum(id);

  return (
    <SafeAreaView>
      <ShowLoadedComponent
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      >
        <View className="p-4">
          {isSuccess && (
            <FlatList
              contentContainerStyle={{ gap: 4 }}
              columnWrapperStyle={{ gap: 4 }}
              data={data.pictures}
              numColumns={3}
              keyExtractor={(item) => item}
              renderItem={({ index, item }) => (
                <ImageComponent
                  picture={item}
                  pictureFolder={data.folderUrl}
                  style={{
                    width: "100%",
                    // Without height undefined it won't work
                    height: undefined,
                    // figure out your image aspect ratio
                    aspectRatio: 135 / 76,
                  }}
                  defaultStyle={false}
                />
              )}
            />
          )}
        </View>
      </ShowLoadedComponent>
    </SafeAreaView>
  );
};

export default AlbumView;
