import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import React from "react";
import { useNavigate } from "react-router";
import {
  tabs,
  useSelectedTab,
} from "../../context/SelectedTabContext/SelectedTabContext";
import type { Asset, AssetType } from "../../types/asset";
import { getAssetsApi } from "../../api/assets";
import { getTotalValueByType } from "../../utils/assets";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutGraphProps = {
  token: string;
};

function DoughnutGraph({ token }: DoughnutGraphProps) {
  return <Doughnut data={} />;
}

export { DoughnutGraph };
