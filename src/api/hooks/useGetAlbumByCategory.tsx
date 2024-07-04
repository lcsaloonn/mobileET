import { useQuery } from "@tanstack/react-query";
import { getAlbumByCategory } from "../queries/album.api";

export const useGetAlbumsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["albumsByCategory"],
    queryFn: () => getAlbumByCategory(category),
  });
};
