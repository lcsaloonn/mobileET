import { TStories } from "types/stories.type";
import { HttpService } from "..";
import { AxiosResponse } from "axios";

async function getStories() {
  try {
    const response = await HttpService.instance.get("", "getStories");
    return await response.data;
  } catch (e) {
    console.error(e);
  }
}

export { getStories };
