import axios, { Axios, AxiosRequestConfig } from "axios";

import { TMockRoutes } from "./routes/routes";
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
    if (this.isMock && mockRoute) {
      return this.axiosClient.get(findMockRoutes(mockRoute), config);
    }

    const baseUrl = isLocal
      ? process.env.EXPO_PUBLIC_LOCAL_API_URL
      : process.env.EXPO_PUBLIC_API_BASE_URL;

    return this.axiosClient.get(url, { baseURL: baseUrl, ...config });
  }
}
