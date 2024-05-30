import { Text, View } from "react-native";

const ErrorMessageComponent = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack text-center">
        Sorry an error occured
      </Text>
      <Text className="text-l font-pblack pt-2">
        Retry or contact our administrator
      </Text>
    </View>
  );
};

export default ErrorMessageComponent;
