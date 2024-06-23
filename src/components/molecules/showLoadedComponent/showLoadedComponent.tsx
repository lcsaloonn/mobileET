import { UseQueryResult } from "@tanstack/react-query";
import { ActivityIndicator } from "react-native";
import ErrorMessageComponent from "../ErrorMessage/errorMessage";
import { PropsWithChildren } from "react";

type TShowLoadedComponent = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

const ShowLoadedComponent = ({
  children,
  isError,
  isLoading,
  isSuccess,
}: PropsWithChildren<TShowLoadedComponent>) => {
  return (
    <>
      {isLoading && (
        <ActivityIndicator
          size={"large"}
          className="justify-center align-middle"
        />
      )}
      {isError && <ErrorMessageComponent />}
      {isSuccess && children}
    </>
  );
};
export default ShowLoadedComponent;
