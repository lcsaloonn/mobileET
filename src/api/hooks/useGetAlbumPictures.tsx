import { useQuery } from "@tanstack/react-query";
import { getPictureByAlbumId } from "../queries/album.api";

export const useGetAlbumPictures = (albumId: string) => {
  return useQuery({
    queryKey: ["albumPictures"],
    queryFn: () => getPictureByAlbumId(albumId),
  });
};
