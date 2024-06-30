import { TId } from "./utils/id.type";
import { TUser } from "./utils/user.type";

export type TAlbum = {
  id: TId;
  creator: TUser;
  name: string;
  folderUrl: string;
  creationDate: string;
  likes: number;
  views: number;
  numberOfPictures: number;
  mainPicture: string;
  pictures: string[];
  access: string[];
  category: string;
};
