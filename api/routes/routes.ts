export const httpRoutes = {
  ALBUM: "/album",
  ALBUMS: "",
} as const;

export const mockRoutes = {
  ["albums"]: "albums.json",
  ["images"]: "images.json",
  ["profile"]: "profile.json",
};

export type TRoutes = (typeof httpRoutes)[keyof typeof httpRoutes];
export type TMockRoutes = keyof typeof mockRoutes;
