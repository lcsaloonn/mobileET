import ImageComponent from "components/image/image.component";
import { View, Text, Image } from "react-native";

type TAlbumMiniatureComponent = {
  albumName: string;
  numberOfImage: number;
  image: string;
};

const AlbumMiniatureComponent = ({
  albumName,
  numberOfImage,
  image,
}: TAlbumMiniatureComponent) => {
  return (
    <View>
      <ImageComponent picture={"mocks/albums/t1.jpg"} />
      <Text>{albumName}</Text>
      <Text>#{numberOfImage}</Text>
    </View>
  );
};

export default AlbumMiniatureComponent;
