export function getImageRoute(pictureUrl: string, pictureFolder?: string) {
  const isLocal = Boolean(process.env.EXPO_PUBLIC_IS_LOCAL === "true");
  const baseUrl = isLocal
    ? process.env.EXPO_PUBLIC_LOCAL_IMAGE_BASE_URI
    : process.env.EXPO_PUBLIC_IMAGE_BASE_URI;

  const url = pictureFolder
    ? baseUrl + pictureFolder + pictureUrl
    : baseUrl + pictureUrl;

  return url;
}
