import { useState } from "react";
import { Switch, View, Text, FlatList } from "react-native";
import AccordeonComponent from "src/components/atoms/accordeon/accordeon.component";
import { TUserAlbumCategory } from "types/settings/userAlbumCategory.type";

type TFollowedCategory = TUserAlbumCategory[];

const FollowedCategory = ({
  categories,
}: {
  categories: TFollowedCategory;
}) => {
  return (
    <AccordeonComponent title={"My Categories"} isOpenDefault={true}>
      <View className="rounded">
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          numColumns={1}
          renderItem={({ index, item }) => (
            <CategoryChoise name={item.name} selected={false} key={index} />
          )}
        />
      </View>
    </AccordeonComponent>
  );
};
export default FollowedCategory;

const CategoryChoise = ({
  name,
  selected,
}: {
  name: string;
  selected: boolean;
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  return (
    <View className="p-2 flex flex-row items-center justify-between">
      <Text>{name}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isSelected ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        value={isSelected}
        onValueChange={(evt) => setIsSelected(evt)}
      />
    </View>
  );
};
