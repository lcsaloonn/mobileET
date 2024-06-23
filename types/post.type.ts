import { TId, TUser } from "./utils/z-index";

export type TPost = {
  id: TId;
  user: TUser;
  title: string; // post or picture name
  type: "picture" | "text";
  data: {
    baseImg: string;
    folderPath: string;
    type: string;
  };
  likes: number;
  isLiked: boolean;
};
