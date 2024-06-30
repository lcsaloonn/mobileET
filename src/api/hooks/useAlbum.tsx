import { useQuery } from "@tanstack/react-query";
import { getAlbumById } from "../queries/album.api";

export const useGetAlbum = (id: string) => {
  return useQuery({
    queryKey: ["album"],
    queryFn: () => getAlbumById(id),
  });
};
