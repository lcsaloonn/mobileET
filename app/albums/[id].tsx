import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const AlbumView = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: id }} />
    </View>
  );
};

export default AlbumView;
