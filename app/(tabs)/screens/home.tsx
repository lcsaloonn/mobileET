import { useQuery } from "@tanstack/react-query";
import { View, FlatList } from "react-native";
import { getStories } from "src/api/queries/stories.api";
import { StoriesProfileCompoent } from "src/components/molecules/albumStories";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";

const Home = () => {
  const storiesQuery = useQuery({
    queryKey: ["stories"],
    queryFn: () => getStories(),
  });

  return (
    <View>
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
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          )}
        />
      </ShowLoadedComponent>
    </View>
  );
};

export default Home;
