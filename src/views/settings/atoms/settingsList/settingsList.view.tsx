import { View, Text, Switch } from "react-native";
import AccordeonComponent from "src/components/atoms/accordeon/accordeon.component";

const SettingsListView = () => {
  return (
    <View className="pt-5">
      <AccordeonComponent title={"Followed Albums"} isOpenDefault={true}>
        <View
          className="rounded p-2 flex flex-row items-center justify-between"
          style={{ backgroundColor: "grey" }}
        >
          <Text>My Favorites</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            ios_backgroundColor="#3e3e3e"
          />
        </View>
      </AccordeonComponent>
    </View>
  );
};
export default SettingsListView;
