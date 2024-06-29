import { View, Text, Switch, ScrollView } from "react-native";
import AccordeonComponent from "src/components/atoms/accordeon/accordeon.component";
import FollowedCategory from "../FollowedCategory/followedCategory";
import { useSettings } from "src/api/hooks/useSettings";

const SettingsListView = () => {
  const { data } = useSettings();
  return (
    <View className="pt-5">
      <ScrollView>
        <FollowedCategory categories={data?.albumFollowed} />
      </ScrollView>
    </View>
  );
};
export default SettingsListView;
