import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { getAllAlbum } from "api/album.api";

const Home = () => {
  let album: any = "";
  async function getAlbum() {
    try {
      const reponse = await fetch("http://192.168.1.22:3000");
      album = await reponse.json();
      console.log(album);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getAlbum();
  });
  return (
    <View>
      <Text>{album}</Text>
    </View>
  );
};

export default Home;
