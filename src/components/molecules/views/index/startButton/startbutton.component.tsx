import { router } from "expo-router";
import React from "react";
import { View, Pressable, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

type TStartButton = {
  className?: string;
  pathname: string;
};

const StartButton = ({ className, pathname }: TStartButton) => {
  return (
    <Pressable
      className="flex-row gap-1  mt-52 items-center"
      onPress={() =>
        router.push({
          pathname: pathname,
        })
      }
    >
      <Text className="text-3xl font-semibold text-blue-500">Start</Text>
      <Entypo name="arrow-with-circle-right" size={18} color="#3b82f6" />
    </Pressable>
  );
};
export default StartButton;
