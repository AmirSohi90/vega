import { Tab } from "../../atoms/Tab";
import {
  useSelectedTab,
  type TabProps,
} from "../../../context/SelectedTabContext/SelectedTabContext";

type TabBarProps = {
  tabs: TabProps[];
};

function TabBar({ tabs }: TabBarProps) {
  const { activeTab, setSelectedTab } = useSelectedTab();

  const onClick = (tab: TabProps) => {
    setSelectedTab(tab);
  };

  return (
    <ul className="flex gap-2">
      {tabs.map((tab) => (
        <li key={tab.id}>
          <Tab
            variant={activeTab.id === tab.id ? "active" : "inActive"}
            label={tab.label}
            onClick={() => onClick(tab)}
          />
        </li>
      ))}
    </ul>
  );
}

export { TabBar };
