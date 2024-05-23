export const httpRoutes = {
  ALBUM: "/album",
  ALBUMS: "",
} as const;

export const mockRoutes = {
  ["getAlbums"]: "getAlbums.json",
  ["getAlbumPictures"]: "getAlbumPictures.json",
};

export type TRoutes = (typeof httpRoutes)[keyof typeof httpRoutes];
export type TMockRoutes = keyof typeof mockRoutes;
