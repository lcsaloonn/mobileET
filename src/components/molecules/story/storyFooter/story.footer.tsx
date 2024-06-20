import { TextInput, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import storyFooterStyles from "./story.footer.style";

const StoryFooter = () => {
  return (
    <View style={storyFooterStyles.container}>
      <TextInput
        placeholder="Send message"
        placeholderTextColor="white"
        style={storyFooterStyles.input}
      />
      <TouchableOpacity>
        <Feather name="navigation" style={storyFooterStyles.actionBtn} />
      </TouchableOpacity>
    </View>
  );
};
export default StoryFooter;
