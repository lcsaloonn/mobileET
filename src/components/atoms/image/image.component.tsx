import { Image, ImageStyle, StyleProp, StyleSheet } from "react-native";
import { getImageRoute } from "./image.helper";

type TImageComponent = {
  picture: string;
  pictureFolder?: string;
  style?: ImageStyle;
  className?: string;
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
}: TImageComponent) => {
  console.log("1---");
  console.log(getImageRoute(picture, pictureFolder));
  return (
    <Image
      source={{
        uri: getImageRoute(picture, pictureFolder),
      }}
      style={[styles.image, style]}
      className={className}
    />
  );
};
const styles = StyleSheet.create({
  image: { width: 100, height: 100 },
});

export default ImageComponent;
export { TImage };
