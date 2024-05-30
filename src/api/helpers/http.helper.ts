import { TMockRoutes, mockRoutes } from "../routes/routes";

function getBaseUrl(): string {
  const isMock = Boolean(process.env.EXPO_PUBLIC_IS_LOCAL === "true");
  const url = process.env.EXPO_PUBLIC_API_URL || "localhost:3000";
  return isMock ? process.env.EXPO_PUBLIC_LOCAL_API_URL + "src/api/mock/" : url;
}

function findMockRoutes(mocksRepo: TMockRoutes) {
  return mockRoutes[mocksRepo];
}

export { getBaseUrl, findMockRoutes };
