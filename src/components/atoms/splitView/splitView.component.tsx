import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
type TSplitViewComponent = {
  right: {
    component: JSX.Element;
    text: string;
  };
  left: {
    component: JSX.Element;
    text: string;
  };
};
const SplitViewComponent = ({ right, left }: TSplitViewComponent) => {
  const [isRightComponentDisplay, setIsRightComponentDisplay] = useState(false);
  return (
    <View className="pt-4">
      <View className="flex  flex-row justify-around">
        <View>
          <Pressable onPress={() => setIsRightComponentDisplay(false)}>
            <Text
              className="capitalize text-lg font-bold  px-3"
              style={!isRightComponentDisplay && styles.underline}
            >
              {left.text}
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => setIsRightComponentDisplay(true)}>
            <Text
              className={"capitalize text-lg font-bold px-3"}
              style={isRightComponentDisplay && styles.underline}
            >
              {right.text}
            </Text>
          </Pressable>
        </View>
      </View>
      <View>{isRightComponentDisplay ? right.component : left.component}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  underline: {
    borderBottomColor: "#000",
    borderBottomWidth: 4,
  },
});
export default SplitViewComponent;
