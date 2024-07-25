import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetHealth } from "src/api/hooks/useGetHealth";
import { SafeAreaView } from "react-native-safe-area-context";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import {
  ConnectionStatus,
  StartButton,
  SwitchEnvComponent,
} from "src/components/molecules/views/index/z-index";
import { isApiOK } from "src/components/molecules/views/index/helpers/checkApi";
import { useStore } from "src/store/store";

export default function App() {
  const { isLoading, data } = useGetHealth();
  const isMock = Boolean(process.env.EXPO_PUBLIC_IS_MOCK == "true");
  const [isOnline, setIsOnline] = useState(false);
  const [isLocalOk, isOnlineOK] = isApiOK(isMock, data);
  const setEnv = useStore((state) => state.setEnv);

  useEffect(() => {
    setEnv(!isOnline);
  }, [isOnline]);

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
            isSuccess={isOnline ? isOnlineOK : isLocalOk}
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
