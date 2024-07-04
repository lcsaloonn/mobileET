import { AxiosRequestConfig } from "axios";
import { HttpService } from "..";
import { TAlbum, TAlbumPcitures } from "types/album.type";

async function getAlbums(
  category?: string,
  config?: AxiosRequestConfig
): Promise<TAlbum[]> {
  try {
    const response = await HttpService.instance.get("", "getAlbums", {
      ...config,
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

async function getAlbumById(id: string): Promise<TAlbum> {
  try {
    const response = await HttpService.instance.get("", "getAlbum");
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

async function getAlbumByCategory(category: string): Promise<TAlbum[]> {
  return await getAlbums(category);
}

async function getPictureByAlbumId(album: string): Promise<TAlbumPcitures> {
  try {
    const response = await HttpService.instance.get("", "getAlbumPictures");
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

export { getAlbums, getAlbumById, getPictureByAlbumId, getAlbumByCategory };
