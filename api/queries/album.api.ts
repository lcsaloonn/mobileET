import { HttpService } from "api";
import { AxiosRequestConfig } from "axios";

async function getAllAlbum(config?: AxiosRequestConfig): Promise<any[]> {
  try {
    const response = await HttpService.instance.get("", "getAlbums", {
      ...config,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export { getAllAlbum };
