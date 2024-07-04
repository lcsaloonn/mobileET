import { PropsWithChildren } from "react";
import { View } from "react-native";

const ViewContainer = ({ children }: PropsWithChildren) => {
  return <View className="px-4">{children}</View>;
};
export default ViewContainer;
