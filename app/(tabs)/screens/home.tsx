import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { View, FlatList, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStories } from "src/api/queries/stories.api";
import ImageComponent from "src/components/atoms/image/image.component";
import { StoriesProfileCompoent } from "src/components/molecules/albumStories";
import StorieComponent from "src/components/molecules/albumStories/storie/storie.component";
import StoryComponentTest from "src/components/molecules/albumStories/storie/test";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";

const Home = () => {
  const [insideStory, setInsideStory] = useState(false);

  const storiesQuery = useQuery({
    queryKey: ["stories"],
    queryFn: () => getStories(),
  });

  return (
    <SafeAreaView>
      <ShowLoadedComponent query={storiesQuery}>
        <View>
          {insideStory ? (
            <StoryComponentTest
              onFinishStory={() => setInsideStory(false)}
              stories={storiesQuery.data[0].stories}
            />
          ) : (
            <View>
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
              <ImageComponent picture={"mocks/albums/t4.jpg"} />
              <Text>{"thomas"}</Text>
            </View>
          )}
        </View>
      </ShowLoadedComponent>
    </SafeAreaView>
  );
};

export default Home;
