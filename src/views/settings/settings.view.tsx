import { View, Text } from "react-native";
import SplitViewComponent from "src/components/atoms/splitView/splitView.component";
const SettingsView = () => {
  return (
    <SplitViewComponent
      right={{ component: <Text>right</Text>, text: "Settings" }}
      left={{ component: <Text>left</Text>, text: "Profile" }}
    />
  );
};
export default SettingsView;
