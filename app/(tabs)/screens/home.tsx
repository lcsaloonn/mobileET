import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { View, FlatList, Image, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStories } from "src/api/queries/stories.api";
import ImageComponent from "src/components/atoms/image/image.component";
import { StoriesProfileCompoent } from "src/components/molecules/albumStories";
import StorieComponent from "src/components/molecules/albumStories/storie/storie.component";
import StoryComponentTest from "src/components/molecules/albumStories/storie/test";
import ModalComponent from "src/components/atoms/modal/modal.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import UsersStoriesContainer from "src/components/molecules/home/userStoriesContainer/userStoriesContainer";

const Home = () => {
  const [insideStory, setInsideStory] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const storiesQuery = useQuery({
    queryKey: ["stories"],
    queryFn: () => getStories(),
  });

  return (
    <SafeAreaView>
      <ShowLoadedComponent query={storiesQuery}>
        <UsersStoriesContainer stories={storiesQuery.data} />
        {/* <View>
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
            </View>
          )}
        </View> */}
      </ShowLoadedComponent>
      {/* <Button title="modal" onPress={() => setModalOpen(true)} />
      <ModalComponent isOpen={isModalOpen}>
        <SingleAlbumPictureComponent
          closeModal={() => setModalOpen(false)}
          pictures={[]}
          albumBaseUrl={""}
        />
      </ModalComponent> */}
    </SafeAreaView>
  );
};

export default Home;
