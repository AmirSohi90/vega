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

ChartJS.register(ArcElement, Tooltip, Legend);

function MyAccountPage() {
  const token = localStorage.getItem("token");
  console.log({ token });
  const [assets, setAssets] = React.useState<{
    assets: Asset[];
    byClass: Record<AssetType, number>;
  } | null>(null);
  const navigate = useNavigate();
  console.log({ assets });

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

  const data = {
    labels: Object.keys(assets?.byClass || {}),
    datasets: [
      {
        label: "Portfolio Allocation",
        data: Object.values(assets?.byClass || {}),
        backgroundColor: [
          "#f7931a", // crypto
          "#4e73df", // stock
          "#1cc88a", // etf
          "#858796", // cash
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <PageSection>
      <Card variant="secondary">
        <TabBar
          tabs={[
            { id: "by-asset-class", label: "By Asset Class" },
            { id: "by-asset", label: "By Asset" },
          ]}
        />
        <Doughnut data={data} />
      </Card>
    </PageSection>
  );
}

export { MyAccountPage };
