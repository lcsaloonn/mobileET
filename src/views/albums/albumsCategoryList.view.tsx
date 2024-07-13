import { ScrollView } from "react-native";
import AlbumListCategoryComponent from "src/components/molecules/albums/albumListCategory/albumListCategory.component";
import { TAlbum } from "types/album.type";

type TAlbumsView = {
  albums: TAlbum[];
};

const AlbumCategoryListView = ({ albums }: TAlbumsView) => {
  // should be done in backend (using user preference)
  function sortAlbumByCategory() {
    let category;

    category = albums.map((e) => e.category);
    const uniqueArr = category.filter(
      (item, index) => category.indexOf(item) === index
    );
    return uniqueArr;
  }

  return (
    <ScrollView>
      {sortAlbumByCategory().map((e, i) => (
        <AlbumListCategoryComponent categoryName={e} albums={albums} key={i} />
      ))}
    </ScrollView>
  );
};

export default AlbumCategoryListView;
