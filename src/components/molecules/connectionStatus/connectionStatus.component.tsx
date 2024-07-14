import { View, StyleSheet, Text } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

type TConnectionStatus = {
  isLocalAccessible: boolean;
  isOnlineAccessible: boolean;
};

const ConnectionStatus = ({
  isLocalAccessible,
  isOnlineAccessible,
}: TConnectionStatus) => {
  const connections = [
    {
      name: "local",
      isAccessible: isLocalAccessible,
    },
    {
      name: "Online",
      isAccessible: isOnlineAccessible,
    },
  ];
  return (
    <View className="ml-3 mt-3 flex flex-col gap-1">
      {connections.map((e, i) => (
        <View className="flex flex-row gap-3">
          <Fontisto
            name="world-o"
            size={19}
            color={e.isAccessible ? "#4F8EF7" : "#dc2626"}
          />
          <Text
            className={`font-semibold text-sm ${
              !e.isAccessible && "text-red-600"
            }`}
          >
            {e.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ConnectionStatus;
