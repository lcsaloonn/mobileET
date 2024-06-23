import { useLocalSearchParams } from "expo-router";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStory } from "src/api/stacks/useStories";
import ImageComponent from "src/components/atoms/image/image.component";
import { StoryFooter, StoryHeader } from "src/components/atoms/story/z-index";
import { toDisplayNameFormat } from "src/helpers/text/format";
import { TBaseStory } from "types/stories.type";

const StoryView = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data } = useStory();

  function findUserStories(id: string, allSotries: TBaseStory[]) {
    return allSotries.filter((e) => e.id === id)[0];
  }
  const { user, stories } = findUserStories(id, data);
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
            displayName={toDisplayNameFormat(user.surname, user.name)}
            userImg={user.picture}
          />
          <ImageComponent
            picture={stories[0].story}
            pictureFolder={stories[0].folderUrl}
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
