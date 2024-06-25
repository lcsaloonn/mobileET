import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "../queries/album.api";

export const useGetAlbums = () => {
  return useQuery({
    queryKey: ["albums"],
    queryFn: () => getAlbums(),
  });
};
