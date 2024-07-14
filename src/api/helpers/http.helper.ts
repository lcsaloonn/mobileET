import { TMockRoutes, mockRoutes } from "../routes/routes";

// Todo test
function findMockRoutes(mocksRepo: TMockRoutes) {
  return mockRoutes[mocksRepo];
}

// Todo test
function findEnvWithBaseUrl(
  baseURL: string,
  baseUrlRoute: { env: string; path: string }[]
) {
  return baseUrlRoute.find((e) => e.path === baseURL).env;
}
export { findMockRoutes, findEnvWithBaseUrl };
