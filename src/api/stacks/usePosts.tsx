import { useQuery } from "@tanstack/react-query";
import { getLatestPost } from "../queries/post.api";

export const useLatestPosts = () => {
  return useQuery({
    queryKey: ["latest"],
    queryFn: () => getLatestPost(),
  });
};
