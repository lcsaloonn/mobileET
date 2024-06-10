import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStories } from "src/api/queries/stories.api";
import { StoriesProfileCompoent } from "src/components/molecules/albumStories";
import StorieComponent from "src/components/molecules/albumStories/storie/storie.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";

const Home = () => {
  const [insideStory, setInsideStory] = useState(false);

  const storiesQuery = useQuery({
    queryKey: ["stories"],
    queryFn: () => getStories(),
  });
  const a = storiesQuery.data[0];
  return (
    <SafeAreaView>
      <ShowLoadedComponent query={storiesQuery}>
        <FlatList
          data={storiesQuery.data}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ index, item }) => (
            <StoriesProfileCompoent
              outlineColor={"red"}
              displayName={"Thomas"}
              image={{
                imageUrl: storiesQuery.data[index].user.picture,
              }}
              onClick={() => setInsideStory(true)}
            />
          )}
        />
        <View>
          {insideStory ? (
            <StorieComponent
              onFinishStory={() => setInsideStory(false)}
              stories={storiesQuery.data[0].stories}
            />
          ) : (
            <Text>Home Page</Text>
          )}
        </View>
      </ShowLoadedComponent>
    </SafeAreaView>
  );
};

export default Home;
