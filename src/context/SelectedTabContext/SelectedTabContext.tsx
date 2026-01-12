import React from "react";

type TabProps = {
  id: string;
  label: string;
};

type SelectedTabContextValue = {
  activeTab: TabProps;
  setSelectedTab: React.Dispatch<React.SetStateAction<TabProps>>;
};

type SelectedTabProvderProps = {
  children: React.ReactNode;
};

const tabs: TabProps[] = [
  { id: "by-asset-class", label: "By Asset Class" },
  { id: "by-asset", label: "By Asset" },
] as const;

const SelectedTabContext = React.createContext<
  SelectedTabContextValue | undefined
>(undefined);

function useSelectedTab(): SelectedTabContextValue {
  const context = React.useContext(SelectedTabContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}

const SelectedTabProvider = ({ children }: SelectedTabProvderProps) => {
  const [activeTab, setSelectedTab] = React.useState<TabProps>(tabs[0]);

  if (!activeTab) return null;

  return (
    <SelectedTabContext.Provider value={{ activeTab, setSelectedTab }}>
      {children}
    </SelectedTabContext.Provider>
  );
};

export { SelectedTabProvider, tabs, useSelectedTab };
export type { TabProps };
