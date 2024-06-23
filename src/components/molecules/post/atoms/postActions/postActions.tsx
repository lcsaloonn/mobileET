import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

type TPostActions = {
  likes: number;
  isLisked: boolean;
};
const PostActions = ({ likes, isLisked = false }: TPostActions) => {
  const [like, setLike] = useState(likes);
  return (
    <View>
      <View>
        <TouchableOpacity>
          <AntDesign
            name={like ? "heart" : "hearto"}
            style={{
              paddingRight: 10,
              fontSize: 20,
              color: like ? "red" : "black",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PostActions;
