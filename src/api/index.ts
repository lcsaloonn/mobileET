import axios, { Axios, AxiosRequestConfig } from "axios";

import { TMockRoutes } from "./routes/routes";
import { findMockRoutes, getBaseUrl } from "./helpers/http.helper";

export class HttpService {
  private axiosClient: Axios;
  private isMock = Boolean(process.env.EXPO_PUBLIC_IS_MOCK === "true");
  private isLocal = Boolean(process.env.EXPO_PUBLIC_IS_LOCAL === "true");

  static readonly instance: HttpService = new HttpService();

  private constructor() {
    this.axiosClient = axios.create({
      baseURL: getBaseUrl(this.isMock, this.isLocal),
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  get(url: string, mockRoute?: TMockRoutes, config?: AxiosRequestConfig) {
    console.log(this.isMock);
    console.log(this.isLocal);
    if (this.isMock && mockRoute) {
      return this.axiosClient.get(findMockRoutes(mockRoute), config);
    }
    return this.axiosClient.get(url, config);
  }
}
