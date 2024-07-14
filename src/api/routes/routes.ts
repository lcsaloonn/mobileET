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
  health: "health",
} as const;

export const mockRoutes = {
  ["getAlbums"]: "getAlbums.json",
  ["getAlbumPictures"]: "getAlbumPictures.json",
  ["getAlbum"]: "getAlbum.json",
  ["getStories"]: "getStories.json",
  ["getLatestPost"]: "getLatestPost.json",
  ["getSettings"]: "getSettings.json",
  ["noRoutes"]: "/",
};

export type TMockRoutes = keyof typeof mockRoutes;
