import { Image, ImageStyle, StyleProp, StyleSheet } from "react-native";
import { getImageRoute } from "./image.helper";

type TImageComponent = {
  picture: string;
  pictureFolder?: string;
  style?: ImageStyle;
  className?: string;
  defaultStyle?: boolean;
};
type TImage = {
  imageUrl: string;
  folderPath?: string;
};

const ImageComponent = ({
  picture,
  pictureFolder,
  style,
  className,
  defaultStyle = true,
}: TImageComponent) => {
  console.log(getImageRoute(picture, pictureFolder));
  return (
    <Image
      source={{
        uri: getImageRoute(picture, pictureFolder),
      }}
      style={[style, defaultStyle && styles.image]}
    />
  );
};
const styles = StyleSheet.create({
  image: { width: 100, height: 100 },
});

export default ImageComponent;
export { TImage };
