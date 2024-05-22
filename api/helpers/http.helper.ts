import { TMockRoutes, mockRoutes } from "api/routes/routes";

function getBaseUrl(): string {
  const isMock = Boolean(process.env.EXPO_PUBLIC_IS_LOCAL === "true");
  const url = process.env.EXPO_PUBLIC_API_URL || "localhost:3000";
  return isMock ? "http://localhost:5173/src/services/http/mock/" : url;
}

function findMockRoutes(mocksRepo: TMockRoutes) {
  return mockRoutes[mocksRepo];
}

export { getBaseUrl, findMockRoutes };
