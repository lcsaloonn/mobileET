import { Text, View } from "react-native";
import React, { useState } from "react";
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
  const [isOnline, setIsOnline] = useState(false);
  console.log(isOnline);

  const isApiOK = (isMock: boolean, values: typeof data) => {
    console.log(data);
    let isLocalOK = false;
    let isOnlineOK = false;

    if (isMock) return [true, false];
    if (data === undefined || Object.keys(data).length == 0)
      return [false, false];

    if (data.local !== "failed") isLocalOK = true;
    if (data.online !== "failed") isLocalOK = true;

    return [isLocalOK, isOnlineOK];
  };

  const [isLocalOk, isOnlineOK] = isApiOK(isMock, data);

  return (
    <SafeAreaView>
      <View className="h-full flex flex-col">
        <View className="flex items-center justify-center mt-16">
          <Text className="text-3xl font-pblack ">ETOM</Text>
          <Text className="text-2xl font-semibold">Family Album</Text>
        </View>

        <View className="flex-row items-center justify-around mt-10 mx-8">
          <ConnectionStatus
            isLocalAccessible={isLocalOk || false}
            isOnlineAccessible={isOnlineOK || false}
          />
          <SwitchEnvComponent isOnline={isOnline} setIsOnline={setIsOnline} />
        </View>

        <View className={`flex items-center justify-center mt-24`}>
          <ShowLoadedComponent
            isLoading={isLoading}
            isSuccess={isLocalOk || isOnlineOK}
            errorMessage={{
              title: `${isOnline ? "Online" : "Local"} is not available`,
            }}
          >
            <StartButton
              pathname={"screens/home"}
              message={!isOnline ? "Start Local" : "Start Online"}
            />
          </ShowLoadedComponent>
        </View>
      </View>
    </SafeAreaView>
  );
}
