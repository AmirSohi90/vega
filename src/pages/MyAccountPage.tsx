import { Card } from "../components/atoms/Card";
import { PageSection } from "../components/atoms/PageSection";
import React from "react";
import { useNavigate } from "react-router";
import { getAssetsApi } from "../api/assets";
import type { Asset, AssetType } from "../types/asset";
import { getPortfolioTotal, getTotalValueByAssetType } from "../utils/assets";
import { TabBar } from "../components/molecules/TabBar";
import {
  tabs,
  useSelectedTab,
  type TabProps,
} from "../context/SelectedTabContext/SelectedTabContext";
import { DoughnutGraph } from "../components/templates/DoughnutGraph";
import { Title } from "../components/atoms/Title";
import { AssetTable } from "../components/organisms/AssetTable";
import { ClassTable } from "../components/organisms/ClassTable/ClassTable";

function MyAccountPage() {
  const token = localStorage.getItem("token");
  const { activeTab } = useSelectedTab();
  const [assets, setAssets] = React.useState<Asset[] | null>(null);
  const [portfolioTotal, setPortfolioTotal] = React.useState(0);
  const navigate = useNavigate();

  const assetsByClass = React.useMemo(() => {
    if (assets) {
      const totalValueByAssetType = getTotalValueByAssetType(assets);
      return Object.entries(totalValueByAssetType).map(([key, total]) => ({
        id: key as AssetType,
        name: key as AssetType,
        total,
      }));
    }
  }, [assets]);

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
        setAssets(res);
      });
    }
  }, []);

  if (!assets) {
    return null;
  }

  const byClassData = {
    labels: assetsByClass?.map(({ name }) => name),
    datasets: [
      {
        label: "Portfolio Allocation",
        data: assetsByClass?.map(({ total }) => total),
        backgroundColor: ["#f7931a", "#4e73df", "#1cc88a", "#858796"],
        borderWidth: 1,
      },
    ],
  };

  const byAssetData = {
    labels: assets?.map(({ name }) => name),
    datasets: [
      {
        label: "Portfolio Allocation",
        data: assets?.map(({ marketValue }) => marketValue),
        backgroundColor: assets?.map(
          ({ colourAllocation }) => colourAllocation
        ),
        borderWidth: 1,
      },
    ],
  };

  const doughnutData: Record<
    TabProps["id"],
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
        <Card className="w-full h-full p-0">
          {activeTab.id === "by-asset" ? (
            <AssetTable data={assets} />
          ) : (
            <ClassTable data={assetsByClass} />
          )}
        </Card>
      </Card>
    </PageSection>
  );
}

export { MyAccountPage };
