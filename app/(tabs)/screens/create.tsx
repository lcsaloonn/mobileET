import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import AlbumHeaderButtons from "components/albumHeaderButtons/albumHeaderButtons.component";

const create = () => {
  return (
    // album view in here for the moment
    <SafeAreaView className="h-full mx-4 my-4">
      <View>
        <AlbumHeaderButtons />
      </View>
      {/* square for the different views by 2 or more */}
    </SafeAreaView>
  );
};

export default create;
