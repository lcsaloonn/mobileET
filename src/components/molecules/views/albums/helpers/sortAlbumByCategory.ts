import { TAlbum } from "types/z-index";

export function sortAlbumByCategory(albums: TAlbum[]) {
  let category;

  category = albums.map((e) => e.category);
  const uniqueArr = category.filter(
    (item, index) => category.indexOf(item) === index
  );
  return uniqueArr;
}
