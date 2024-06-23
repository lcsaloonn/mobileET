import { View, Text } from "react-native";
import ImageComponent from "src/components/atoms/image/image.component";
import Feather from "react-native-vector-icons/Feather";
type TPostHeader = {
  name: string;
  surname: string;
  userPicture: string;
};
const PostHeader = ({ name, surname, userPicture }: TPostHeader) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ImageComponent
          defaultStyle={false}
          picture={userPicture}
          style={{ width: 40, height: 40, borderRadius: 100 }}
        />
        <View style={{ paddingLeft: 8 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            {`${name} ${surname}`}
          </Text>
        </View>
      </View>
      <Feather
        name="more-vertical"
        style={{
          fontSize: 20,
        }}
      />
    </View>
  );
};
export default PostHeader;
