import { Image, ImageStyle, StyleProp, StyleSheet } from "react-native";

type TImageComponent = {
  picture: string;
  style?: ImageStyle;
  className?: string;
};

const ImageComponent = ({ picture, style, className }: TImageComponent) => {
  return (
    <Image
      source={{
        uri: process.env.EXPO_PUBLIC_IMAGE_BASE_URI + picture,
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
