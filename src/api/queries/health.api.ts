import { AxiosRequestConfig } from "axios";
import { HttpService } from "..";
import { baseUrl, httpRoutes } from "../routes/routes";
import { TApiHealth } from "types/utils/apiHealth";
import { findEnvWithBaseUrl } from "../helpers/http.helper";

//Todo create response type

export async function getHealth(
  config?: AxiosRequestConfig
): Promise<{ ["local"]: "failed" | any; ["online"]: "failed" | any }> {
  try {
    const response = { local: "", online: "" };
    const path = httpRoutes.health;

    const result = await Promise.allSettled([
      HttpService.instance.get(path, true, "noRoutes"),
      HttpService.instance.get(path, false, "noRoutes"),
    ]);

    const success = result
      .filter((r) => r.status === "fulfilled")
      .map((r) => {
        let env = findEnvWithBaseUrl(r.value.config.baseURL, baseUrl);
        return (response[env] = r.value.data);
      });

    const errors = result
      .filter((r) => r.status === "rejected")
      .map((r) => {
        let env = findEnvWithBaseUrl(r.reason.config.baseURL, baseUrl);
        return (response[env] = "failed");
      });

    console.log(`Health values ${response}`);
    return response;
  } catch (e) {
    console.error("health endpoint failed");
  }
}
