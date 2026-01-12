import { LoadingProvider } from "./context/LoadingContext/LoadingContext";
import { SelectedTabProvider } from "./context/SelectedTabContext/SelectedTabContext";

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  return (
    <LoadingProvider>
      <SelectedTabProvider>{children}</SelectedTabProvider>
    </LoadingProvider>
  );
}

export { AppProvider };
