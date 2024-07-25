import { AxiosRequestConfig } from "axios";

export type TCommonApiConfig = {
  config?: AxiosRequestConfig;
  isLocal: boolean;
};
