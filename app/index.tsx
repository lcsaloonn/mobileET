import { Pressable, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useGetHealth } from "src/api/hooks/useGetHealth";
import { SafeAreaView } from "react-native-safe-area-context";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import {
  ConnectionStatus,
  StartButton,
  SwitchEnvComponent,
} from "src/components/molecules/views/index/z-index";

export default function App() {
  const { isError, isLoading, isSuccess, data } = useGetHealth();
  const isMock = Boolean(process.env.EXPO_PUBLIC_IS_MOCK == "true");

  // console.log(data);

  const isApiOK = (isMock: boolean) => {
    if (isMock) return true;
    if (data == false) return data;
    for (const service in data) {
      if (data[service] == false) return false;
    }
    return true;
  }; // create test

  return (
    <SafeAreaView>
      <View className="h-full flex flex-col">
        <View className="flex items-center justify-center mt-16">
          <Text className="text-3xl font-pblack ">ETOM</Text>
          <Text className="text-2xl font-semibold">Family Album</Text>
        </View>

        <View className="flex-row items-center justify-around mt-10 mx-8">
          <ConnectionStatus
            isLocalAccessible={isApiOK(isMock)}
            isOnlineAccessible={false}
          />
          <SwitchEnvComponent />
        </View>

        <View className={`flex items-center justify-center mt-24`}>
          <ShowLoadedComponent
            isLoading={isLoading}
            isSuccess={isApiOK(isMock)}
          >
            <StartButton pathname={"screens/home"} />
          </ShowLoadedComponent>
        </View>
      </View>
    </SafeAreaView>
  );
}
