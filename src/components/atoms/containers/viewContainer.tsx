import { PropsWithChildren } from "react";
import { View } from "react-native";

const ViewContainer = ({ children }: PropsWithChildren) => {
  return <View className="mx-4">{children}</View>;
};
export default ViewContainer;
