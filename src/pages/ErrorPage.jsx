import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1
        style={{
          color: "red",
        }}
      >
        Oops! Something wrong error!
      </h1>
      {error.status === 404 ? (
        <p>Unexpected error </p>
      ) : (
        error.text || error.message
      )}
    </div>
  );
};
