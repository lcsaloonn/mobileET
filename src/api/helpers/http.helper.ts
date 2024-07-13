import { TMockRoutes, mockRoutes } from "../routes/routes";

function getBaseUrl(isMock: boolean, isLocal: boolean): string {
  if (isMock) return process.env.EXPO_PUBLIC_MOCK_API_URL + "src/api/mock/";
  if (isLocal) return process.env.EXPO_PUBLIC_LOCAL_API_URL;
  return process.env.EXPO_PUBLIC_API_BASE_URL;
}

function findMockRoutes(mocksRepo: TMockRoutes) {
  return mockRoutes[mocksRepo];
}

export { getBaseUrl, findMockRoutes };
