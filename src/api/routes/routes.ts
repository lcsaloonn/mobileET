export const httpRoutes = {
  ALBUM: "/album",
  PICTURE: "/picture",
  ALBUMS: "",
} as const;

export const mockRoutes = {
  ["getAlbums"]: "getAlbums.json",
  ["getAlbumPictures"]: "getAlbumPictures.json",
  ["getAlbum"]: "getAlbum.json",
  ["getStories"]: "getStories.json",
};

export type TRoutes = (typeof httpRoutes)[keyof typeof httpRoutes];
export type TMockRoutes = keyof typeof mockRoutes;
