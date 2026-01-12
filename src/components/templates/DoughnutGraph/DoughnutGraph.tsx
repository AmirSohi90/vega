import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutGraphProps = {
  data: ChartData<"doughnut", number[] | undefined, string>;
};

function DoughnutGraph({ data }: DoughnutGraphProps) {
  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          legend: {
            position: "right",
            align: "center",
          },
        },
      }}
    />
  );
}

export { DoughnutGraph };
