import { useEffect, useRef, useState } from "react";
import {
  Animated,
  View,
  Dimensions,
  SafeAreaView,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import ImageComponent from "src/components/atoms/image/image.component";
import { getProgressBarWidth, handleStory } from "./storie.helper";
import stoieStyles from "./storie.style";
import { TStories, TStory } from "types/stories.type";

type TStorieComponent = {
  onFinishStory: () => void;
  stories: TStory[];
};
const StorieComponent = ({ onFinishStory, stories }: TStorieComponent) => {
  const styles = stoieStyles;
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [wentBack, setWentBack] = useState(0); // maybe not needed
  const progressBarAnnimation = useRef(new Animated.Value(0)).current;
  const pauseProgress = useRef(0);
  const currentStory = stories[currentStoryIndex]; // maybe not needed
  const { width } = Dimensions.get("window");
  const [goToNextStory, goToPreviousStory, runProgressAnimation] = handleStory(
    currentStoryIndex,
    stories.length,
    progressBarAnnimation,
    pauseProgress,
    isPause,
    setCurrentStoryIndex,
    setWentBack,
    onFinishStory,
    setIsPause
  );

  const handleScreenTouch = (evt: GestureResponderEvent) => {
    const touchX = evt.nativeEvent.locationX;
    if (touchX < width / 2) {
      goToPreviousStory();
    } else {
      goToNextStory();
    }
  };

  useEffect(() => {
    if (!isPause) {
      runProgressAnimation();
    } else {
      progressBarAnnimation.stopAnimation(
        (value) => (pauseProgress.current = value)
      );
    }
  }, [currentStoryIndex, isPause]);

  function render(story: TStory) {
    switch (story.type) {
      case "picture":
        return (
          <ImageComponent
            picture={story.story}
            pictureFolder={story.folderUrl}
            style={styles.backgroundImg}
          />
        );
      case "video":
        null;
      // need to be implemented
      default:
        return null;
    }
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <Pressable
        onPress={handleScreenTouch}
        onLongPress={() => setIsPause(true)}
        onPressOut={() => setIsPause(false)}
        style={({ pressed }) => [
          { opacity: pressed ? 0.9 : 1 },
          styles.container,
        ]}
      >
        <View>{currentStory.type && render(currentStory)}</View>
        <SafeAreaView>
          <View style={styles.progressbarContainer}>
            {stories.map((story, index) => (
              <View style={styles.progressbarBackground} key={index}>
                <Animated.View
                  style={[
                    styles.progressbar,
                    {
                      width: getProgressBarWidth(
                        index,
                        currentStoryIndex,
                        progressBarAnnimation
                      ),
                    },
                  ]}
                />
              </View>
            ))}
          </View>
        </SafeAreaView>
      </Pressable>
    </SafeAreaView>
  );
};

export default StorieComponent;
