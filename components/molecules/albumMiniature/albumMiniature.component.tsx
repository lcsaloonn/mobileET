import ImageComponent from "components/atoms/image/image.component";
import { View, Text, StyleSheet } from "react-native";

type TAlbumMiniatureComponent = {
  albumName: string;
  numberOfPictures: number;
  picture: string;
};

const AlbumMiniatureComponent = ({
  albumName,
  numberOfPictures,
  picture,
}: TAlbumMiniatureComponent) => {
  return (
    <View>
      <ImageComponent picture={picture} style={styles.picture} />
      <Text style={styles.albumName}>{albumName}</Text>
      <Text style={styles.numberpictures}>#{numberOfPictures}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  picture: { borderRadius: 10 },
  albumName: { textTransform: "capitalize", fontWeight: "bold", fontSize: 12 },
  numberpictures: { fontSize: 10 },
});

export default AlbumMiniatureComponent;
