import { HttpService } from "..";

async function getSettings(userId: string) {
  try {
    const response = await HttpService.instance.get("", "getSettings");
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

export { getSettings };
