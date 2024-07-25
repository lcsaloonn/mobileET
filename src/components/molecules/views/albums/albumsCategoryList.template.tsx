import { ScrollView } from "react-native";
import AlbumListCategoryComponent from "src/components/molecules/albums/albumListCategory/albumListCategory.component";
import { TAlbum } from "types/album.type";
import { sortAlbumByCategory } from "./helpers/sortAlbumByCategory";

type TAlbumsView = {
  albums: TAlbum[];
};

const AlbumCategoryListTemplate = ({ albums }: TAlbumsView) => {
  const sortedAlbums = sortAlbumByCategory(albums);

  return (
    <ScrollView>
      {sortedAlbums.map((e, i) => (
        <AlbumListCategoryComponent categoryName={e} albums={albums} key={i} />
      ))}
    </ScrollView>
  );
};

export default AlbumCategoryListTemplate;
