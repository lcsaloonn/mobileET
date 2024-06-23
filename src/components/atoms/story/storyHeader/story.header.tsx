import { View, Text, TouchableOpacity } from "react-native";
import ImageComponent from "src/components/atoms/image/image.component";
import Ionic from "react-native-vector-icons/Ionicons";
import storyHeaderStyles from "./story.header.style";
import { router } from "expo-router";

type TStoryHeader = {
  displayName: string;
  userImg: string;
  onFinishStory: () => void;
};

const StoryHeader = ({ displayName, userImg, onFinishStory }: TStoryHeader) => {
  return (
    <>
      {/* story time bar */}
      <View style={storyHeaderStyles.timeBarContainer}>
        <View style={storyHeaderStyles.timeBar}></View>
      </View>
      <View style={storyHeaderStyles.infoBarContainer}>
        <View style={storyHeaderStyles.imgContainer}>
          <ImageComponent
            picture={userImg}
            style={storyHeaderStyles.img}
            defaultStyle={false}
          />
        </View>
        <View style={storyHeaderStyles.infoContainer}>
          <Text style={storyHeaderStyles.name}>{displayName}</Text>
          <TouchableOpacity onPress={onFinishStory}>
            <Ionic name="close" style={storyHeaderStyles.closeBtn} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default StoryHeader;
