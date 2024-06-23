import { TouchableOpacity, View } from "react-native";
import { TPost } from "types/post.type";
import { PostActions, PostHeader, PostPictureContent } from "./atoms/z-index";

type TPostComponent = TPost;

const PostComponent = ({ user, data, isLiked, likes }: TPostComponent) => {
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
      <PostActions likes={likes} isLisked={isLiked} />
    </View>
  );
};
export default PostComponent;
