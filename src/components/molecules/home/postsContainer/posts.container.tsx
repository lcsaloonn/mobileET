import { View } from "react-native";
import { TPost } from "types/post.type";
import PostComponent from "../../post/post.component";

type TPostsContainer = {
  posts: TPost[];
};
const PostsContainer = ({ posts }: TPostsContainer) => {
  return (
    <View>
      {posts.map((e, i) => (
        <PostComponent key={i} {...e} />
      ))}
    </View>
  );
};
export default PostsContainer;
