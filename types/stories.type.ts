export type TStories = TBaseStory[];

type TBaseStory = {
  id: string;
  user: { id: string; name: string; picture: string };
  stories: TStory[];
};

export type TStory = {
  story: string;
  folderUrl: string;
  type: "video" | "picture";
};
