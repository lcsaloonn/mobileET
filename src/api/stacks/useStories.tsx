import { useQuery } from "@tanstack/react-query";
import { getStories } from "../queries/stories.api";

export const useStory = () => {
  return useQuery({
    queryKey: ["stories"],
    queryFn: () => getStories(),
  });
};
