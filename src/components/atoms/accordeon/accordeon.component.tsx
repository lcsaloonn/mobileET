import { PropsWithChildren, useState } from "react";
import { View, Text, Pressable } from "react-native";
import Feather from "react-native-vector-icons/Feather";

type TAccordeonComponent = {
  title: string;
  isOpenDefault: boolean;
};

const AccordeonComponent = ({
  children,
  title,
  isOpenDefault,
}: PropsWithChildren<TAccordeonComponent>) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  return (
    <View>
      <Pressable onPress={() => setIsOpen((prev) => !prev)}>
        <View className="flex flex-row items-center justify-between ml-5 mr-7">
          <View>
            <Text className="text-lg font-medium">{title}</Text>
          </View>
          <Pressable onPress={() => setIsOpen((prev) => !prev)}>
            <Feather
              style={{ fontSize: 22, fontWeight: 700 }}
              name={isOpen ? "chevron-up" : "chevron-right"}
            />
          </Pressable>
        </View>
      </Pressable>
      {isOpen && <View className="mx-5 mt-2">{children}</View>}
    </View>
  );
};
export default AccordeonComponent;
