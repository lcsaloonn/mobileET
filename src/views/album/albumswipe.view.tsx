import { Pressable, View } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import ImageComponent from "src/components/atoms/image/image.component";
import { TAlbum } from "types/album.type";

type TAlbumSwipeView = {
  onClose: () => void;
  data: TAlbum;
  selectedPictureIndex: number;
};

const AlbumSwipeView = ({
  onClose,
  data,
  selectedPictureIndex,
}: TAlbumSwipeView) => {
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
export default AlbumSwipeView;
