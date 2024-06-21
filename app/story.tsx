import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageComponent from "src/components/atoms/image/image.component";
import { StoryFooter, StoryHeader } from "src/components/atoms/story/z-index";
import { toDisplayNameFormat } from "src/helpers/text/format";

// param id with id get the corresponding story, zustang can be use to get them

const StoryView = () => {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <SafeAreaView>
        <View
          style={{
            backgroundColor: "black",
            height: "100%",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StoryHeader
            displayName={toDisplayNameFormat("thomas", "enticott")}
            userImg={"mocks/albums/moto.jpg"}
          />
          <ImageComponent
            picture={"mocks/albums/moto.jpg"}
            defaultStyle={false}
            style={{ position: "absolute", width: "100%", height: 500 }}
          />
          <StoryFooter />
        </View>
      </SafeAreaView>
    </>
  );
};
export default StoryView;
