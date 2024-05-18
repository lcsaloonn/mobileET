import ImageComponent from "components/atoms/image/image.component";
import { View, Text, StyleSheet } from "react-native";

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
      <ImageComponent picture={image} style={styles.image} />
      <Text style={styles.albumName}>{albumName}</Text>
      <Text style={styles.numberImage}>#{numberOfImage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { borderRadius: 10 },
  albumName: { textTransform: "capitalize", fontWeight: "bold", fontSize: 12 },
  numberImage: { fontSize: 10 },
});

export default AlbumMiniatureComponent;
