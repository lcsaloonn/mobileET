import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "../queries/album.api";
import { useStore } from "src/store/store";

export const useGetAlbums = () => {
  const isLocal = useStore((state) => state.isLocal);
  return useQuery({
    queryKey: ["albums"],
    queryFn: () => getAlbums({ isLocal: isLocal }),
  });
};
