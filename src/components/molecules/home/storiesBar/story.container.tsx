import { router } from "expo-router";
import { ScrollView } from "react-native";
import StoryComponent from "src/components/atoms/storyComponent/story.component";
import { toDisplayNameFormat } from "src/helpers/text/format";
import { TStories } from "types/stories.type";
type TStoriesContainer = {
  stories: TStories;
};

const StoriesContainer = ({ stories }: TStoriesContainer) => {
  const navigation = router;
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {stories.map((e, i) => (
        <StoryComponent
          key={i}
          displayName={toDisplayNameFormat(e.user.name, e.user.surname)}
          onClick={() => router.push("index")}
          isDefault={i === 0}
          image={{
            imageUrl: e.user.picture,
          }}
        />
      ))}
    </ScrollView>
  );
};
export default StoriesContainer;
