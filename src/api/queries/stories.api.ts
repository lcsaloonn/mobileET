import { HttpService } from "..";

async function getStories() {
  try {
    const response = await HttpService.instance.get("", "stories");
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

export { getStories };
