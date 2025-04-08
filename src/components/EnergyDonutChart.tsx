import  React  from "react";
import Chart from "react-apexcharts";
import { GenerationMixItem } from "../interfaces";

interface Props {
  data: GenerationMixItem[];
}
const EnergyDonutChart = ({ data }: Props) => {
  const options = {
    chart: { type: "donut" },
    labels: data.map((item) => item.fuel.charAt(0).toUpperCase() + item.fuel.slice(1)),
    legend: { position: "bottom" },
    responsive: [
      {
        breakpoint: 768,
        options: {
          legend: { position: "bottom" },
        },
      },
    ],
  };

  const series = data.map((item) => item.perc);

  return <Chart options={options} series={series} type="donut" width="100%" />;
};

export default EnergyDonutChart;
