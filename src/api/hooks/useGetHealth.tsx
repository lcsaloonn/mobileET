import { useQuery } from "@tanstack/react-query";
import { getHealth } from "../queries/health.api";

export const useGetHealth = () => {
  return useQuery({
    queryKey: ["health"],
    queryFn: () => getHealth(),
    refetchOnReconnect: "always",

    retry: 3,
  });
};
