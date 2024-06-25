import React from "react";
import { ScrollView } from "react-native";
import { useGetAlbums } from "src/api/hooks/useAlbums";
import AlbumListCategoryComponent from "src/components/molecules/albums/albumListCategory/albumListCategory.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";

const AlbumCategoryView = () => {
  const { data, isLoading, isError, isSuccess } = useGetAlbums();

  // should be done in backend (using user preference)
  function sortAlbumByCategory() {
    let category;
    if (isSuccess) {
      category = data.map((e) => e.category);
      const uniqueArr = category.filter(
        (item, index) => category.indexOf(item) === index
      );
      return uniqueArr;
    }
  }

  return (
    <ShowLoadedComponent
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
    >
      <ScrollView>
        {isSuccess &&
          sortAlbumByCategory().map((e, i) => (
            <AlbumListCategoryComponent
              categoryName={e}
              albums={data}
              key={i}
            />
          ))}
      </ScrollView>
    </ShowLoadedComponent>
  );
};

export default AlbumCategoryView;
