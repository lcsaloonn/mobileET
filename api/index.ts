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

  get(url: TRoutes, defaultMocks?: TMockRoutes, config?: AxiosRequestConfig) {
    if (this.isMock && defaultMocks) {
      return this.axiosClient.get(findMockRoutes(defaultMocks), config);
    } else {
      return this.axiosClient.get(url, config);
    }
  }
}
