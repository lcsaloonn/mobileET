import {
  TMockRoutes,
  baseUrl as baseRoute,
  mockRoutes,
} from "../routes/routes";

// Todo test
function findMockRoutes(mocksRepo: TMockRoutes) {
  return mockRoutes[mocksRepo];
}

// Todo test
function findEnvWithBaseUrl(urlToCheck: string, baseURL: typeof baseRoute) {
  if (urlToCheck === Object.values(baseRoute)[0])
    return Object.keys(baseRoute)[0];

  if (urlToCheck === Object.values(baseRoute)[1])
    return Object.keys(baseRoute)[1];
  return undefined;
}
export { findMockRoutes, findEnvWithBaseUrl };
