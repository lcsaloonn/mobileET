import axios, { Axios, AxiosRequestConfig } from "axios";

import { TMockRoutes, TRoutes } from "./routes/routes";
import { findMockRoutes, getBaseUrl } from "./helpers/http.helper";

export class HttpService {
  private axiosClient: Axios;
  private isMock = Boolean(process.env.EXPO_PUBLIC_IS_LOCAL === "true");
  static readonly instance: HttpService = new HttpService();

  private constructor() {
    this.axiosClient = axios.create({
      baseURL: getBaseUrl(),
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  get(url: TRoutes, mockRoute?: TMockRoutes, config?: AxiosRequestConfig) {
    if (this.isMock && mockRoute) {
      return this.axiosClient.get(findMockRoutes(mockRoute), config);
    } else {
      return this.axiosClient.get(url, config);
    }
  }
}
