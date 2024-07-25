import { ActivityIndicator, Text, View } from "react-native";
import ErrorMessageComponent from "../ErrorMessage/errorMessage";
import { Children, PropsWithChildren, Suspense } from "react";

type TShowLoadedComponent = {
  isLoading: boolean;
  isSuccess: boolean;
  loadingMessage?: string;
  errorMessage?: {
    title?: string;
    message?: string;
  };
};

const ShowLoadedComponent = ({
  children,
  isLoading,
  isSuccess,
  loadingMessage,
  errorMessage,
}: PropsWithChildren<TShowLoadedComponent>) => {
  const loader = (
    <View>
      <ActivityIndicator
        size={"large"}
        className="justify-center align-middle"
      />
      <Text>{loadingMessage}</Text>
    </View>
  );

  if (isLoading) {
    return loader;
  }
  if (isSuccess) {
    return <Suspense fallback={loader}>{children}</Suspense>;
  }
  return (
    <ErrorMessageComponent
      message={errorMessage?.message}
      title={errorMessage?.title}
    />
  );
};
export default ShowLoadedComponent;
