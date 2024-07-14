import { Text, View } from "react-native";

const ErrorMessageComponent = () => {
  return (
    <View className="items-center justify-center align-middle">
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
