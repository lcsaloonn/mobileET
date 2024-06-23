import { View } from "react-native";
import { TPost, TPostType } from "types/post.type";
import {
  PostActions,
  PostHeader,
  PostPictureContent,
  PostTextContent,
} from "./atoms/z-index";
import { findContentComponent } from "./post.helper";

type TPostComponent = TPost;

const PostComponent = ({ user, content, isLiked, likes }: TPostComponent) => {
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
      {findContentComponent(content)}
      <PostActions likes={likes} isLisked={isLiked} />
    </View>
  );
};
export default PostComponent;
