import { TBaseStory } from "types/stories.type";
import { HttpService } from "..";

async function getStories(): Promise<TBaseStory[]> {
  try {
    const response = await HttpService.instance.get("", "getStories");
    return await response.data;
  } catch (e) {
    console.error(e);
  }
}

export { getStories };
