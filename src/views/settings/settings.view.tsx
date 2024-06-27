import { View, Text } from "react-native";
import SplitViewComponent from "src/components/atoms/splitView/splitView.component";
import SettingsListView from "./atoms/settingsList/settingsList.view";
const SettingsView = () => {
  return (
    <SplitViewComponent
      right={{ component: <SettingsListView />, text: "Settings" }}
      left={{ component: <Text>left</Text>, text: "Profile" }}
    />
  );
};
export default SettingsView;
