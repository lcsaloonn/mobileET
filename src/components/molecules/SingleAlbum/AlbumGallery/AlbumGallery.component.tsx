import { FlatList } from "react-native";
import ImageComponent from "src/components/atoms/image/image.component";

type TPictureGalleryComponent = {
  pictures: string[];
  folder: string;
};

const AlbumGalleryComponent = ({
  pictures,
  folder,
}: TPictureGalleryComponent) => {
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
        <ImageComponent
          picture={item.picture}
          pictureFolder={folder}
          className="mx-auto my-1"
        />
      )}
    />
  );
};

export default AlbumGalleryComponent;
