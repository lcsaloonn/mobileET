import { AxiosRequestConfig } from "axios";
import { HttpService } from "..";
import { httpRoutes } from "../routes/routes";
import { TApiHealth } from "types/utils/apiHealth";

export async function getHealth(
  config?: AxiosRequestConfig
): Promise<TApiHealth> {
  try {
    const path = httpRoutes.health;

    const result = await Promise.allSettled([
      HttpService.instance.get(path, true, "noRoutes"),
      HttpService.instance.get(path, false, "noRoutes"),
    ]);

    const success = result
      .filter((r) => r.status === "fulfilled")
      .map((r) => r.value.data);

    const error = result
      .filter((r) => r.status === "rejected")
      .map((r) => r.reason);
    console.log("-------------success");
    console.log(success);
    console.log("-------------reject");
    console.log(error[0].config.baseURL);
    //return response.data;
  } catch (e) {
    console.error("health endpoint failed");
    return false;
  }
}
