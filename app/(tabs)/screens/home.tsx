import { SafeAreaView } from "react-native-safe-area-context";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import UsersStoriesContainer from "src/components/molecules/home/userStoriesContainer/userStoriesContainer";
import { useStory } from "src/api/stacks/useStories";
import PostsContainer from "src/components/molecules/home/postsContainer/posts.container";
import { useLatestPosts } from "src/api/stacks/usePosts";

const Home = () => {
  const sotryQuery = useStory();
  const latestPostQuery = useLatestPosts();
  return (
    <SafeAreaView>
      <ShowLoadedComponent
        isLoading={sotryQuery.isLoading && latestPostQuery.isLoading}
        isError={sotryQuery.isError && latestPostQuery.isError}
        isSuccess={sotryQuery.isSuccess && latestPostQuery.isSuccess}
      >
        <UsersStoriesContainer stories={sotryQuery.data} />
        <PostsContainer posts={latestPostQuery.data} />
      </ShowLoadedComponent>
    </SafeAreaView>
  );
};

export default Home;
