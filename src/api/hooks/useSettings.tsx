import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../queries/settings.api";

export const useSettings = () => {
  return useQuery({
    queryKey: ["settings"],
    queryFn: () => getSettings("1"),
  });
};
