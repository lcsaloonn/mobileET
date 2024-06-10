import { Dispatch, MutableRefObject } from "react";
import { Animated } from "react-native";

export function handleStory(
  currentStoryIndex: number,
  storiesLength: number,
  progressAnim: Animated.Value,
  pauseProgress: MutableRefObject<number>,
  isPause: boolean,
  setCurrentStoryIndex: Dispatch<React.SetStateAction<number>>,
  setWentBack: Dispatch<React.SetStateAction<number>>,
  onFinishStory: () => void,
  setIsPause: Dispatch<React.SetStateAction<boolean>>
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

  const goToPreviousStory = () => {
    if (isPause) {
      setIsPause(false);
    }
    pauseProgress.current = 0;
    progressAnim.setValue(0);
    if (currentStoryIndex === 0) {
      setWentBack((prev) => prev + 1);
      runProgressAnimation();
    } else {
      setCurrentStoryIndex((prev) => prev + 1);
    }
  };

  const runProgressAnimation = () => {
    progressAnim.setValue(pauseProgress.current);
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 1,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        goToNextStory();
      }
    });
  };

  return [goToNextStory, goToPreviousStory, runProgressAnimation];
}

export function getProgressBarWidth(
  storyIndex: number,
  currentIndex: number,
  progressAnim: Animated.Value
) {
  if (currentIndex < storyIndex) {
    return "100%";
  }
  if (currentIndex === storyIndex) {
    return progressAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
    });
  }
  return "0%";
}

export function pauseStory(
  setIsPause: Dispatch<React.SetStateAction<boolean>>,
  isPause: boolean
) {
  setIsPause(!isPause);
}

export function muteStory(
  setIsMuted: Dispatch<React.SetStateAction<boolean>>,
  isMuted: boolean
) {
  setIsMuted(!isMuted);
}
