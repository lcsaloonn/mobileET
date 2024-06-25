import { useQuery } from "@tanstack/react-query";
import { Link, router } from "expo-router";
import { View, Text, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAlbums } from "src/api/hooks/useAlbums";
import AlbumMiniatureComponent from "src/components/molecules/albumMiniature/albumMiniature.component";
import HeaderComponent from "src/components/molecules/header/header.component";
import ShowLoadedComponent from "src/components/molecules/showLoadedComponent/showLoadedComponent";
import AlbumView from "src/views/albums/albums.view";

const AlbumsStack = () => {
  return (
    <SafeAreaView>
      <HeaderComponent />
      <AlbumView />
    </SafeAreaView>
  );
};

export default AlbumsStack;
