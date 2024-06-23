import { router, useLocalSearchParams } from "expo-router";
import StoryView from "src/views/story/story.view";

const StoryStack = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <StoryView storyId={id} onFinishStory={() => router.back()} />;
};

export default StoryStack;
