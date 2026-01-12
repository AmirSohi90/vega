import React from "react";

type LoadingContextValue = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoadingContext = React.createContext<LoadingContextValue | undefined>(
  undefined
);

function useLoading(): LoadingContextValue {
  const context = React.useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}

function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export { LoadingProvider, LoadingContext, useLoading };
export type { LoadingContextValue };
