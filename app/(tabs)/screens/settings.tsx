import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsView from "src/views/settings/settings.view";

const Profile = () => {
  return (
    <SafeAreaView>
      <SettingsView />
    </SafeAreaView>
  );
};

export default Profile;
