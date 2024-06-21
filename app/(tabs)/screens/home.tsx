import { useQuery } from "@tanstack/react-query";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStories } from "src/api/queries/stories.api";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import UsersStoriesContainer from "src/components/molecules/home/userStoriesContainer/userStoriesContainer";

const Home = () => {
  const storiesQuery = useQuery({
    queryKey: ["stories"],
    queryFn: () => getStories(),
  });

  return (
    <SafeAreaView>
      <ShowLoadedComponent query={storiesQuery}>
        <UsersStoriesContainer stories={storiesQuery.data} />
      </ShowLoadedComponent>
    </SafeAreaView>
  );
};

export default Home;
