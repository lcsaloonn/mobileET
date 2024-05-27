import ImageComponent from "components/atoms/image/image.component";
import { FlatList } from "react-native";

type TPictureGalleryComponent = {
  pictures: string[];
};

const AlbumGalleryComponent = ({ pictures }: TPictureGalleryComponent) => {
  const data = pictures.map((picture, index) => ({
    id: index.toString(),
    picture,
  }));

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={3}
      renderItem={({ index, item }) => (
        <ImageComponent picture={item.picture} className="mx-auto my-1" />
      )}
    />
  );
};

export default AlbumGalleryComponent;
