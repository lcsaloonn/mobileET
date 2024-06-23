import { PostConent } from "types/post.type";
import { PostPictureContent, PostTextContent } from "./atoms/z-index";

export function findContentComponent(content: PostConent) {
  return {
    picture: content.type === "picture" && (
      <PostPictureContent
        picture={content.baseImg}
        pictureFolder={content.folderPath}
      />
    ),
    text: content.type === "text" && <PostTextContent />,
  }[content.type];
}
