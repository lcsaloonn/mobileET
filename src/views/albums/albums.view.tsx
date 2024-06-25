import { Link, router } from "expo-router";
import React from "react";
import { View, FlatList, Pressable } from "react-native";
import { useGetAlbums } from "src/api/hooks/useAlbums";
import AlbumMiniatureComponent from "src/components/molecules/albumMiniature/albumMiniature.component";
import AlbumListCategoryComponent from "src/components/molecules/albums/albumListCategory/albumListCategory.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";

const AlbumView = () => {
  const { data, isLoading, isError, isSuccess } = useGetAlbums();
  return (
    <ShowLoadedComponent
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
    >
      <AlbumListCategoryComponent categoryName={"Memories"} albums={data} />
    </ShowLoadedComponent>
  );
};

export default AlbumView;
