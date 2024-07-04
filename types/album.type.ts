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
  access: string[];
  category: string;
};

export type TAlbumPcitures = {
  id: string;
  folderUrl: string;
  albumName: string;
  pictures: string[];
};
