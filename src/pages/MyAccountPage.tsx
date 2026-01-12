import { Card } from "../components/atoms/Card";
import { PageSection } from "../components/atoms/PageSection";
import React from "react";
import { useNavigate } from "react-router";
import { getAssetsApi } from "../api/assets";
import type { Asset, AssetType } from "../types/asset";
import { getPortfolioTotal, getTotalValueByType } from "../utils/assets";
import { TabBar } from "../components/molecules/TabBar";
import {
  tabs,
  useSelectedTab,
} from "../context/SelectedTabContext/SelectedTabContext";
import { DoughnutGraph } from "../components/templates/DoughnutGraph";
import { Title } from "../components/atoms/Title";
import { Subtitle } from "../components/atoms/Subtitle";
import { PositionsTable } from "../components/organisms/PortfolioTable/PortfolioTable";

function MyAccountPage() {
  const token = localStorage.getItem("token");
  const { activeTab } = useSelectedTab();
  const [assets, setAssets] = React.useState<{
    assets: Asset[];
    byClass: Record<AssetType, number>;
  } | null>();
  const [portfolioTotal, setPortfolioTotal] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  React.useEffect(() => {
    if (token) {
      getAssetsApi({ token }).then((res) => {
        const total = getPortfolioTotal(res);
        setPortfolioTotal(total);
        setAssets({ assets: res, byClass: getTotalValueByType(res) });
      });
    }
  }, []);

  if (!assets) {
    return null;
  }

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
        <Card className="w-full h-full">
          <Title as="h3">Portfolio Balance</Title>
          <Title as="p">${portfolioTotal}</Title>
          <DoughnutGraph data={doughnutData[activeTab.id]} />
        </Card>
        <Card className="w-full h-full">
          <PositionsTable data={assets.assets} />
        </Card>
      </Card>
    </PageSection>
  );
}

export { MyAccountPage };
