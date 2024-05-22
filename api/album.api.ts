import { HttpService } from "api";
import { AxiosRequestConfig } from "axios";

async function getAllAlbum(config?: AxiosRequestConfig): Promise<any[]> {
  const response = await HttpService.instance.get("", "albums", {
    ...config,
  });
  return response.data;
}

export { getAllAlbum };
