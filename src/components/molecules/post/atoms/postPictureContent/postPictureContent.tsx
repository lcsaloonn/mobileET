import { View } from "react-native";
import ImageComponent from "src/components/atoms/image/image.component";
type TPostPictureContent = {
  picture: string;
  pictureFolder: string;
};
const PostPictureContent = ({
  picture,
  pictureFolder,
}: TPostPictureContent) => {
  return (
    <View
      style={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageComponent
        picture={picture}
        pictureFolder={pictureFolder}
        style={{
          width: "100%",
          height: 400,
        }}
        defaultStyle={false}
      />
    </View>
  );
};
export default PostPictureContent;
