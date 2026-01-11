import { LoadingProvider } from "./context/LoadingContext/LoadingContext";

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  return <LoadingProvider>{children}</LoadingProvider>;
}

export { AppProvider };
