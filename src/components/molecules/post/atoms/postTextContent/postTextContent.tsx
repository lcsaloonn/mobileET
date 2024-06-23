import { View, Text } from "react-native";

const PostTextContent = ({ text }: { text: string }) => {
  return (
    <View
      style={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 1,
        paddingHorizontal: 12,
      }}
    >
      <Text style={{ flexShrink: 1 }}>{`${text}`}</Text>
    </View>
  );
};
export default PostTextContent;
