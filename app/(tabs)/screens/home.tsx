import { SafeAreaView } from "react-native-safe-area-context";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import UsersStoriesContainer from "src/components/molecules/home/userStoriesContainer/userStoriesContainer";
import { useStory } from "src/api/stacks/useStories";

const Home = () => {
  const { data, isError, isSuccess, isLoading } = useStory();

  return (
    <SafeAreaView>
      <ShowLoadedComponent
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      >
        <UsersStoriesContainer stories={data} />
      </ShowLoadedComponent>
    </SafeAreaView>
  );
};

export default Home;
