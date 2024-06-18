import {
  Modal as RNModal,
  ModalProps,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";

type TModal = ModalProps & {
  isOpen: boolean;
  withInput?: boolean;
};
const ModalComponent = ({ isOpen, withInput, children, ...rest }: TModal) => {
  const content = withInput ? (
    <KeyboardAvoidingView
      className="item-center justify-center flex-1 px-3 bg-zinc-900/40"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <View className="items-center justify-center flex-1 px-3  bg-zinc-900/40">
      {children}
    </View>
  );
  return (
    <RNModal
      visible={isOpen}
      transparent
      animationType="fade"
      statusBarTranslucent
      {...rest}
    >
      {content}
    </RNModal>
  );
};

export default ModalComponent;
