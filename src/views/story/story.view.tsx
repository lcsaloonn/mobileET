import { useRef, useState } from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Animated,
  GestureResponderEvent,
  Dimensions,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStory } from "src/api/hooks/useStories";
import ImageComponent from "src/components/atoms/image/image.component";
import { toDisplayNameFormat } from "src/helpers/text/format";
import { findUserStories, handleStory } from "./story.helper";
import { StoryHeader, StoryFooter } from "./atoms/z-index";

type TStoryView = {
  storyId: string;
  onFinishStory: () => void;
};
const StoryView = ({ storyId, onFinishStory }: TStoryView) => {
  const { data } = useStory();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const { user, stories } = findUserStories(storyId, data);
  const { width } = Dimensions.get("window");
  const currentStory = stories[currentStoryIndex];
  const progressBarAnnimation = useRef(new Animated.Value(0)).current;
  const pauseProgress = useRef(0);

  const [goToNextStory, goToPreviousStory] = handleStory(
    currentStoryIndex,
    stories.length,
    progressBarAnnimation,
    pauseProgress,
    setCurrentStoryIndex,
    onFinishStory
  );

  //stories
  const handleScreenTouch = (evt: GestureResponderEvent) => {
    const touchX = evt.nativeEvent.locationX;
    if (touchX < width / 2) {
      goToPreviousStory();
    } else {
      goToNextStory();
    }
  };

  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <SafeAreaView>
        <Pressable onPress={handleScreenTouch}>
          <View style={styles.container}>
            <StoryHeader
              displayName={toDisplayNameFormat(user.name, user.surname)}
              userImg={user.picture}
              onFinishStory={onFinishStory}
            />
            <ImageComponent
              picture={currentStory.story}
              pictureFolder={currentStory.folderUrl}
              defaultStyle={false}
              style={styles.img}
            />
            <StoryFooter />
          </View>
        </Pressable>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  img: { position: "absolute", width: "100%", height: 500 },
});
export default StoryView;
