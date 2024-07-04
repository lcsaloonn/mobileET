import { Pressable, View } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import ImageComponent from "src/components/atoms/image/image.component";
import { TAlbumPcitures } from "types/album.type";

type TAlbumModalView = {
  onClose: () => void;
  data: TAlbumPcitures;
  selectedPictureIndex: number;
};

const AlbumModalView = ({
  onClose,
  data,
  selectedPictureIndex,
}: TAlbumModalView) => {
  return (
    <View>
      <View>
        <Pressable onPress={onClose}>
          <Ionic name={"close"} style={{ fontSize: 40, color: "white" }} />
        </Pressable>
        <View>
          <ImageComponent
            picture={data.pictures[0]}
            pictureFolder={data.folderUrl}
          />
        </View>
      </View>
    </View>
  );
};
export default AlbumModalView;
