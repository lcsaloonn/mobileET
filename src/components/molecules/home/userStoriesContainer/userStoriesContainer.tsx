import { router } from "expo-router";
import { ScrollView } from "react-native";
import StoryComponent from "src/components/atoms/storyComponent/story.component";
import { toDisplayNameFormat } from "src/helpers/text/format";
import { TBaseStory } from "types/stories.type";

type TStoriesContainer = {
  stories: TBaseStory[];
};

const UsersStoriesContainer = ({ stories }: TStoriesContainer) => {
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
          onClick={() => router.push("story")} // add index as param
          isDefault={i === 0}
          image={{
            imageUrl: e.user.picture,
          }}
        />
      ))}
    </ScrollView>
  );
};
export default UsersStoriesContainer;
