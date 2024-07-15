import axios, { Axios, AxiosRequestConfig } from "axios";

import { baseUrl, TMockRoutes } from "./routes/routes";
import { findMockRoutes } from "./helpers/http.helper";

export class HttpService {
  private axiosClient: Axios;
  private isMock = Boolean(process.env.EXPO_PUBLIC_IS_MOCK === "true");

  static readonly instance: HttpService = new HttpService();

  private constructor() {
    this.axiosClient = axios.create({
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  get(
    url: string,
    isLocal: boolean,
    mockRoute?: TMockRoutes,
    config?: AxiosRequestConfig
  ) {
    const env = isLocal ? "local" : "online";
    if (this.isMock && mockRoute) {
      return this.axiosClient.get(findMockRoutes(mockRoute), config);
    }

    return this.axiosClient.get(url, { baseURL: baseUrl[env], ...config });
  }
}
