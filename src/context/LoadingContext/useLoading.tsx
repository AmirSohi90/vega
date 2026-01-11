import React from "react";
import { LoadingContext, type LoadingContextValue } from "./LoadingContext";

const useLoading = (): LoadingContextValue => {
  const context = React.useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
};

export { useLoading };
