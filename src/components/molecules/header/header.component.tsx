import { View, Text } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
const HeaderComponent = () => {
  return (
    <View className="px-4 pt-4 pb-2 flex-row items-center justify-between">
      <Text className="text-xl font-pblack">ETOM</Text>
      <EvilIcons name="navicon" style={{ fontSize: 33 }} />
    </View>
  );
};
export default HeaderComponent;
