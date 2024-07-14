import { AxiosRequestConfig } from "axios";
import { HttpService } from "..";
import { baseUrl, httpRoutes } from "../routes/routes";
import { TApiHealth } from "types/utils/apiHealth";
import { findEnvWithBaseUrl } from "../helpers/http.helper";

//Todo create response type

export async function getHealth(config?: AxiosRequestConfig): Promise<any> {
  try {
    const path = httpRoutes.health;

    const result = await Promise.allSettled([
      HttpService.instance.get(path, true, "noRoutes"),
      HttpService.instance.get(path, false, "noRoutes"),
    ]);

    const success = result
      .filter((r) => r.status === "fulfilled")
      .map((r) => {
        return {
          value: r.value.data,
          env: findEnvWithBaseUrl(r.value.config.baseURL, baseUrl),
        };
      });

    const errors = result
      .filter((r) => r.status === "rejected")
      .map((r) => {
        return { env: findEnvWithBaseUrl(r.reason.config.baseURL, baseUrl) };
      });

    const response = { success: success, error: errors };
    console.log(`Health values ${response}`);
    return response;
    //return response.data;
  } catch (e) {
    console.error("health endpoint failed");
  }
}
