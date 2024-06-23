import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
type TPostActions = {
  likes: number;
  isLisked: boolean;
};
const PostActions = ({ likes, isLisked = false }: TPostActions) => {
  const [like, setLike] = useState(isLisked);
  return (
    <>
      <View style={styles.actionBar}>
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={() => setLike((prev) => !prev)}>
            <AntDesign
              name={like ? "heart" : "hearto"}
              style={[
                {
                  color: like ? "red" : "black",
                },
                styles.icon,
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionic name="chatbubble-outline" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Feather name="bookmark" style={styles.icon} />
      </View>
      <View style={styles.textZone}>
        <Text style={styles.likes}>{`Liked by ${(like && "you and ") || ""}${
          like ? likes + 1 : likes
        } others`}</Text>
        <Text style={styles.comments}>View all comments</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  icon: {
    paddingRight: 10,
    fontSize: 20,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  textZone: {
    paddingHorizontal: 12,
  },
  likes: {
    fontSize: 13,
  },
  comments: {
    opacity: 0.4,
    paddingVertical: 1.5,
    fontSize: 13,
  },
});

export default PostActions;
