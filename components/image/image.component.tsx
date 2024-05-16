import { Image, ImageStyle, StyleProp, StyleSheet } from "react-native";

type TImageComponent = {
  picture: string;
  style?: ImageStyle;
};

const ImageComponent = ({ picture, style }: TImageComponent) => {
  return (
    <Image
      source={{
        uri: process.env.EXPO_PUBLIC_IMAGE_BASE_URI + picture,
      }}
      style={[styles.image, style]}
    />
  );
};
const styles = StyleSheet.create({
  image: { width: 100, height: 100 },
});

export default ImageComponent;
