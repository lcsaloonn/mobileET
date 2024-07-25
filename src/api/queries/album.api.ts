import { AxiosRequestConfig } from "axios";
import { HttpService } from "..";
import { TAlbum, TAlbumPcitures } from "types/album.type";
import { httpRoutes } from "../routes/routes";
import { TCommonApiConfig } from "../types/Tcommom.api";

async function getAlbums(
  baseConfig: TCommonApiConfig,
  category?: string
): Promise<TAlbum[]> {
  try {
    const { name, routes } = httpRoutes.albumService;
    const path = `${name}/${routes.getAlbums}`;

    const response = await HttpService.instance.get(
      path,
      baseConfig.isLocal,
      "getAlbums",
      {
        ...baseConfig.config,
        params: category,
      }
    );
    return response.data.albums;
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
