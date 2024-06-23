import { TId, TUser } from "./utils/z-index";

export type TPost = {
  id: TId;
  user: TUser;
  title: string; // post or picture name
  content: PostConent;
  likes: number;
  isLiked: boolean;
};

export type TPostType = "picture" | "text";

type TPictureContent = {
  type: "picture";
  baseImg: string;
  folderPath: string;
};

type TTextContent = { text: string; type: "text" };

export type PostConent = TTextContent | TPictureContent;
