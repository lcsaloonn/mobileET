import { Text, View } from "react-native";
type TErrorMessageComponent = {
  title?: string;
  message?: string;
};

const ErrorMessageComponent = ({ title, message }: TErrorMessageComponent) => {
  return (
    <View className="items-center justify-center align-middle">
      <Text className="text-2xl font-pblack text-center">
        {title || "Sorry an error occured"}
      </Text>
      <Text className="text-l font-pblack pt-2">
        {message || "Retry or contact our administrator"}
      </Text>
    </View>
  );
};

export default ErrorMessageComponent;
