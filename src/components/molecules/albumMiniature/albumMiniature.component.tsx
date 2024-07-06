import { View, Text, StyleSheet } from "react-native";
import ImageComponent from "src/components/atoms/image/image.component";

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
      <ImageComponent
        picture={picture}
        style={styles.picture}
        defaultStyle={false}
      />
      <Text style={styles.albumName}>{albumName}</Text>
      <Text style={styles.numberpictures}>#{numberOfPictures}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  picture: { borderRadius: 10, height: 110, width: 110 },
  albumName: { textTransform: "capitalize", fontWeight: "bold", fontSize: 12 },
  numberpictures: { fontSize: 10 },
});

export default AlbumMiniatureComponent;
