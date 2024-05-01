import { View, Text } from "react-native";
import React from "react";
import IconComponents from "../icon.component";

const TabsComponent = ({ icon, color, name, focus }) => {
  return (
    <View className="items-center justify-center gap-2">
      <IconComponents icon={icon} color={color} />
      <Text className={`${focus ? "font-psemibold" : "font-regular"}`}>
        {name}
      </Text>
    </View>
  );
};

export default TabsComponent;
