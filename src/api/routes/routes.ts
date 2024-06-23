export const httpRoutes = {
  ALBUM: "/album",
  PICTURE: "/picture",
  ALBUMS: "",
  POSTS: "",
} as const;

export const mockRoutes = {
  ["getAlbums"]: "getAlbums.json",
  ["getAlbumPictures"]: "getAlbumPictures.json",
  ["getAlbum"]: "getAlbum.json",
  ["getStories"]: "getStories.json",
  ["getLatestPost"]: "getLatestPost.json",
};

export type TRoutes = (typeof httpRoutes)[keyof typeof httpRoutes];
export type TMockRoutes = keyof typeof mockRoutes;
