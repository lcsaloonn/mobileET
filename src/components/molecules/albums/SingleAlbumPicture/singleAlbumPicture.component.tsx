import { useState } from "react";
import {
  Button,
  Dimensions,
  GestureResponderEvent,
  Pressable,
  TextInput,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageComponent from "src/components/atoms/image/image.component";

type TPictureModalComponent = {
  closeModal: () => void;
  pictures: string[];
  albumBaseUrl: string;
};

const SingleAlbumPictureComponent = ({
  closeModal,
  pictures,
  albumBaseUrl,
}: TPictureModalComponent) => {
  const { width } = Dimensions.get("window");

  function handleScreenTouch(evt: GestureResponderEvent) {
    const [currentPictureIndex, setCurentPictureIndex] = useState(0);
    const touchX = evt.nativeEvent.locationX;
    if (touchX < width / 2) {
      if (currentPictureIndex + 1 !== pictures.length)
        setCurentPictureIndex((prev) => prev + 1);
      console.log("+1");
    } else {
      if (currentPictureIndex - 1 !== 0)
        setCurentPictureIndex((prev) => prev - 1);
      console.log("-1");
    }
  }

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          height: "100%",
        }}
        className="w-screen"
      >
        <View className="rounded-xl items-center m-auto">
          <Pressable onPress={(evt) => handleScreenTouch(evt)}>
            <ImageComponent picture={"mocks/albums/t4.jpg"} />
          </Pressable>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            height: "10%",
            padding: 5,
            backgroundColor: "grey",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              width: "auto",
            }}
            // onChangeText={}
            placeholder="useless placeholder"
            keyboardType="default"
          />
          <Pressable
            onPress={closeModal}
            style={{
              backgroundColor: "white",
              width: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>close</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SingleAlbumPictureComponent;
