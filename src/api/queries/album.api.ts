import { AxiosRequestConfig } from "axios";
import { HttpService } from "..";

async function getAllAlbum(config?: AxiosRequestConfig): Promise<any[]> {
  try {
    const response = await HttpService.instance.get("", "getAlbums", {
      ...config,
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

async function getPictureByAlbumId(id: string) {
  try {
    const response = await HttpService.instance.get("", "getAlbumPictures");
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

export { getAllAlbum, getPictureByAlbumId };
