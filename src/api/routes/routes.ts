export const baseUrl: { [key in "local" | "online"]: string } = {
  local: process.env.EXPO_PUBLIC_LOCAL_API_URL,
  online: process.env.EXPO_PUBLIC_API_BASE_URL,
} as const;

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
