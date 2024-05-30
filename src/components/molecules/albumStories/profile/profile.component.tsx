import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ImageComponent, {
  TImage,
} from "src/components/atoms/image/image.component";

type TStoriesProfileCompoent = {
  outlineColor: string;
  displayName: string;
  image?: TImage;
  onClick: () => void;
};

const StoriesProfileCompoent = ({
  outlineColor,
  displayName,
  image,
  onClick,
}: TStoriesProfileCompoent) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <View style={[styles.imageContainer, { borderColor: outlineColor }]}>
          <ImageComponent
            picture={image ? image.imageUrl : "defaultImage"}
            pictureFolder={image.folderPath}
            style={styles.img}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.name}>{displayName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: { borderRadius: 50 },
  imageContainer: {
    borderWidth: 5,
    borderRadius: 80,
    padding: 0.2,
  },
  name: {
    marginTop: 8,
    fontSize: 18,
    textAlign: "center",
  },
});

export default StoriesProfileCompoent;
