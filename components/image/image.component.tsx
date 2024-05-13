import { Image } from "react-native";

type TImageComponent = {
  picture: string;
};

const ImageComponent = ({ picture }: TImageComponent) => {
  return (
    <Image
      source={{
        uri: process.env.EXPO_PUBLIC_IMAGE_BASE_URI + picture,
      }}
      style={{ width: 100, height: 100 }}
    />
  );
};

export default ImageComponent;
