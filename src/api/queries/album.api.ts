import { AxiosRequestConfig } from "axios";
import { HttpService } from "..";
import { TAlbum } from "types/album.type";

async function getAlbums(config?: AxiosRequestConfig): Promise<TAlbum[]> {
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

export { getAlbums, getPictureByAlbumId };
