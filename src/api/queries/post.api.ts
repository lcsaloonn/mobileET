import { AxiosRequestConfig } from "axios";
import { HttpService } from "..";
import { TPost } from "types/post.type";

async function getLatestPost(config?: AxiosRequestConfig): Promise<TPost[]> {
  try {
    const response = await HttpService.instance.get("", "getLatestPost", {
      ...config,
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
}
export { getLatestPost };
