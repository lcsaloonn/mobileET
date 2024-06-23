import { Text, TouchableOpacity, View } from "react-native";
import ImageComponent from "src/components/atoms/image/image.component";
import { TPost } from "types/post.type";

import { useState } from "react";
import PostHeader from "../../post/atoms/postHeader/postHeader";
import PostPictureContent from "../../post/atoms/postPictureContent/postPictureContent";
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
