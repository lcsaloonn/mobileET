import { ActivityIndicator, Text, View } from "react-native";
import ErrorMessageComponent from "../ErrorMessage/errorMessage";
import { PropsWithChildren } from "react";

type TShowLoadedComponent = {
  isLoading: boolean;
  isError?: boolean;
  isSuccess: boolean;
  loadingMessage?: string;
  errorMessage?: {
    title?: string;
    message?: string;
  };
};

const ShowLoadedComponent = ({
  children,
  isError,
  isLoading,
  isSuccess,
  loadingMessage,
  errorMessage,
}: PropsWithChildren<TShowLoadedComponent>) => {
  return (
    <>
      {isLoading && (
        <View>
          <ActivityIndicator
            size={"large"}
            className="justify-center align-middle"
          />
          <Text>{loadingMessage}</Text>
        </View>
      )}

      {!isLoading && !isSuccess ? (
        <ErrorMessageComponent
          message={errorMessage?.message}
          title={errorMessage?.title}
        />
      ) : (
        children
      )}
    </>
  );
};
export default ShowLoadedComponent;
