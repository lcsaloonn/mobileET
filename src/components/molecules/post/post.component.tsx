import { TouchableOpacity, View } from "react-native";
import { TPost } from "types/post.type";
import { PostActions, PostHeader, PostPictureContent } from "./atoms/z-index";

type TPostComponent = TPost;

const PostComponent = ({ user, data }: TPostComponent) => {
  return (
    <View
      style={{
        paddingBottom: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 0.1,
      }}
    >
      <PostHeader
        name={user.name}
        surname={user.surname}
        userPicture={user.picture}
      />
      <PostPictureContent
        picture={data.baseImg}
        pictureFolder={data.folderPath}
      />
      <PostActions likes={120} isLisked={false} />
    </View>
  );
};
export default PostComponent;
