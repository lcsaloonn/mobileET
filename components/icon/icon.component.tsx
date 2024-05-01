import { View, Image, Text } from "react-native";
import React from "react";

type TIconComponent = {
  icon: any;
  color: string;
};

const IconComponents = ({ icon, color }: TIconComponent) => {
  return (
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
    />
  );
};

export default IconComponents;
