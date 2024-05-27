import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import AlbumHeaderButtons from "components/molecules/albumHeaderButtons/albumHeaderButtons.component";
import ImageComponent from "components/atoms/image/image.component";

const create = () => {
  const categories = ["gallery", "moments", "map"] as const;
  type Categories = (typeof categories)[number];
  const [selectedType, setSelectedTyped] = useState<string>(categories[0]);

  return (
    // album view in here for the moment
    <SafeAreaView className="h-full mx-4 my-4">
      <View>
        <AlbumHeaderButtons
          selectedType={(name) => setSelectedTyped(name)}
          catgories={categories as [string, string, string]}
          defaultIndexSelection={0}
        />
      </View>
      {/* square for the different views by 2 or more */}
    </SafeAreaView>
  );
};

export default create;
