import { useState } from "react";
import { Switch, Text, View } from "react-native";
type TSwitchEnvComponent = {
  setIsOnline: React.Dispatch<React.SetStateAction<boolean>>;
  isOnline: boolean;
};

const SwitchEnvComponent = ({ isOnline, setIsOnline }: TSwitchEnvComponent) => {
  return (
    <View className="flex flex-col items-center">
      <Text className="text-sm font-semibold ">
        {isOnline ? "Online" : "Local"}
      </Text>
      <Switch
        trackColor={{ false: "#999", true: "#4F8EF7" }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#999"
        value={isOnline}
        onValueChange={(evt) => setIsOnline(evt)}
      />
    </View>
  );
};
export default SwitchEnvComponent;
