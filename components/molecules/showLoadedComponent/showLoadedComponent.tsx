import { UseQueryResult } from "@tanstack/react-query";
import { ActivityIndicator } from "react-native";
import ErrorMessageComponent from "../ErrorMessage/errorMessage";
import { PropsWithChildren } from "react";

type TShowLoadedComponent = {
  query: UseQueryResult;
};

const ShowLoadedComponent = ({
  children,
  query,
}: PropsWithChildren<TShowLoadedComponent>) => {
  return (
    <>
      {query.isLoading && (
        <ActivityIndicator
          size={"large"}
          className="justify-center align-middle"
        />
      )}
      {query.isError && <ErrorMessageComponent />}
      {query.isSuccess && children}
    </>
  );
};
export default ShowLoadedComponent;
