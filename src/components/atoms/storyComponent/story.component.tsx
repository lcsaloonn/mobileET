import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import ImageComponent, {
  TImage,
} from "src/components/atoms/image/image.component";
import { Entypo } from "react-native-vector-icons";

type TStoryCompoent = {
  displayName: string;
  image: TImage;
  onClick: () => void;
  isDefault: boolean;
};

const StoryComponent = ({
  displayName,
  image,
  onClick,
  isDefault,
}: TStoryCompoent) => {
  const addMoreStoryBtn = (
    <View style={{ position: "absolute", bottom: 15, right: 10, zIndex: 1 }}>
      <Entypo
        name="circle-with-plus"
        style={{
          fontSize: 20,
          color: "#405de6",
          backgroundColor: "white",
          borderRadius: 100,
        }}
      />
    </View>
  );

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        {isDefault && addMoreStoryBtn}

        <View style={styles.imageContainer}>
          <ImageComponent
            picture={image.imageUrl}
            pictureFolder={image.folderPath}
            style={styles.img}
            defaultStyle={false}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 10,
            opacity: isDefault ? 1 : 0.5,
            textTransform: "capitalize",
          }}
        >
          {displayName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 8,
    position: "relative",
  },
  img: {
    resizeMode: "cover",
    width: "92%",
    height: "92%",
    borderRadius: 100,
    backgroundColor: "orange",
  },
  imageContainer: {
    width: 68,
    height: 68,
    backgroundColor: "white",
    borderWidth: 1.8,
    borderRadius: 100,
    borderBlockColor: "#c13584",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StoryComponent;
