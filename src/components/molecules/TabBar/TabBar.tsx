import React from "react";
import { Tab } from "../../atoms/Tab";

type Tab = {
  id: string;
  label: string;
};

type TabBarProps = {
  tabs: Tab[];
};

function TabBar({ tabs }: TabBarProps) {
  const [activeTab, setActiveTab] = React.useState<Tab>(tabs[0]);

  const onClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <ul className="flex gap-2">
      {tabs.map((tab) => (
        <li>
          <Tab
            variant={activeTab.id === tab.id ? "active" : "inActive"}
            key={tab.id}
            label={tab.label}
            onClick={() => onClick(tab)}
          />
        </li>
      ))}
    </ul>
  );
}

export { TabBar };
