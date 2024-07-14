import { View, Text } from "react-native";
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
    <View className="flex-col gap-1">
      {connections.map((e, i) => (
        <View className=" flex-row gap-3 align-middle items-center" key={i}>
          <Fontisto
            name="world-o"
            size={18}
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
