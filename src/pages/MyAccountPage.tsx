import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { Card } from "../components/atoms/Card";
import { PageSection } from "../components/atoms/PageSection";
import React from "react";
import { useNavigate } from "react-router";
import { getAssetsApi } from "../api/assets";
import type { Asset, AssetType } from "../types/asset";
import { getTotalValueByType } from "../utils/assets";
import { TabBar } from "../components/molecules/TabBar";
import {
  tabs,
  useSelectedTab,
} from "../context/SelectedTabContext/SelectedTabContext";

ChartJS.register(ArcElement, Tooltip, Legend);

function MyAccountPage() {
  const token = localStorage.getItem("token");
  const { activeTab } = useSelectedTab();
  const [assets, setAssets] = React.useState<{
    assets: Asset[];
    byClass: Record<AssetType, number>;
  } | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  React.useEffect(() => {
    if (token) {
      getAssetsApi({ token }).then((res) => {
        setAssets({ assets: res, byClass: getTotalValueByType(res) });
      });
    }
  }, []);

  const byClassData = {
    labels: Object.keys(assets?.byClass || {}),
    datasets: [
      {
        label: "Portfolio Allocation",
        data: Object.values(assets?.byClass || {}),
        backgroundColor: ["#f7931a", "#4e73df", "#1cc88a", "#858796"],
        borderWidth: 1,
      },
    ],
  };

  const byAssetData = {
    labels: assets?.assets.map(({ name }) => name),
    datasets: [
      {
        label: "Portfolio Allocation",
        data: assets?.assets.map(({ marketValue }) => marketValue),
        backgroundColor: assets?.assets.map(
          ({ colourAllocation }) => colourAllocation
        ),
        borderWidth: 1,
      },
    ],
  };

  const doughnutData: Record<
    (typeof tabs)[number]["id"],
    typeof byAssetData | typeof byClassData
  > = {
    "by-asset-class": byClassData,
    "by-asset": byAssetData,
  };

  return (
    <PageSection>
      <Card variant="secondary">
        <TabBar tabs={tabs} />
        <Doughnut data={doughnutData[activeTab.id]} />
      </Card>
    </PageSection>
  );
}

export { MyAccountPage };
