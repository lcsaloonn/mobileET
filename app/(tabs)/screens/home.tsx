import { SafeAreaView } from "react-native-safe-area-context";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import UsersStoriesContainer from "src/components/molecules/home/userStoriesContainer/userStoriesContainer";
import { useStory } from "src/api/hooks/useStories";
import PostsContainer from "src/components/molecules/home/postsContainer/posts.container";
import { useLatestPosts } from "src/api/hooks/usePosts";
import { ScrollView } from "react-native";
import HeaderComponent from "src/components/molecules/header/header.component";

const Home = () => {
  const sotryQuery = useStory();
  const latestPostQuery = useLatestPosts();
  return (
    <SafeAreaView>
      {/* to be move */}
      <HeaderComponent />
      <ShowLoadedComponent
        isLoading={sotryQuery.isLoading && latestPostQuery.isLoading}
        isError={sotryQuery.isError && latestPostQuery.isError}
        isSuccess={sotryQuery.isSuccess && latestPostQuery.isSuccess}
      >
        <ScrollView>
          <UsersStoriesContainer stories={sotryQuery.data} />
          <PostsContainer posts={latestPostQuery.data} />
        </ScrollView>
      </ShowLoadedComponent>
    </SafeAreaView>
  );
};

export default Home;
