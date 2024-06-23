import { TId, TUser } from "./utils/z-index";

export type TBaseStory = {
  id: TId;
  user: TUser;
  stories: TStory[];
  isAllViewed: boolean;
};

export type TStory = {
  story: string;
  folderUrl: string;
  type: "video" | "picture";
  isViewed: boolean;
};
