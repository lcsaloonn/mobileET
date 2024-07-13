const AlbumService = {
  name: "album",
  routes: {
    getAlbum: "",
    getAlbums: "all",
    createAlbum: "",
  },
} as const;

export const httpRoutes = {
  albumService: AlbumService,
} as const;

export const mockRoutes = {
  ["getAlbums"]: "getAlbums.json",
  ["getAlbumPictures"]: "getAlbumPictures.json",
  ["getAlbum"]: "getAlbum.json",
  ["getStories"]: "getStories.json",
  ["getLatestPost"]: "getLatestPost.json",
  ["getSettings"]: "getSettings.json",
};

export type TMockRoutes = keyof typeof mockRoutes;
