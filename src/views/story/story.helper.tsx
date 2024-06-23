import { Dispatch, MutableRefObject } from "react";
import { Animated } from "react-native";
import { TBaseStory } from "types/stories.type";

export function findUserStories(id: string, allSotries: TBaseStory[]) {
  return allSotries.filter((e) => e.id === id)[0];
}

export function handleStory(
  currentStoryIndex: number,
  storiesLength: number,
  progressAnim: Animated.Value,
  pauseProgress: MutableRefObject<number>,
  setCurrentStoryIndex: Dispatch<React.SetStateAction<number>>,
  setWentBack: Dispatch<React.SetStateAction<number>>,
  onFinishStory: () => void
) {
  const goToNextStory = () => {
    if (currentStoryIndex < storiesLength - 1) {
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 3,
        useNativeDriver: false,
      }).start(() => {
        pauseProgress.current = 0;
        setCurrentStoryIndex((prev) => prev + 1);
        progressAnim.setValue(0);
      });
    } else {
      setWentBack(0);
      setCurrentStoryIndex(0);
      onFinishStory();
    }
  };
  return [goToNextStory];
}
