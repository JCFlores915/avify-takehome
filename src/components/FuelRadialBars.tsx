import React from "react";
import { GenerationMixItem } from "../interfaces";
import Card from 'antd/es/card/Card';
import Chart from "react-apexcharts";

interface Props {
  data: GenerationMixItem[];
}

const FuelRadialBars = ({ data }: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 16,
      }}
    >
      {data.map((item, index) => {
        const options = {
          chart: {
            type: "radialBar",
            sparkline: { enabled: true },
          },
          plotOptions: {
            radialBar: {
              hollow: { size: "60%" },
              dataLabels: {
                name: { show: true },
                value: {
                  formatter: () => `${item.perc.toFixed(1)}%`,
                  fontSize: "16px",
                  show: true,
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              gradientToColors: ["#00bcd4"],
              stops: [0, 100],
            },
          },
          labels: [item.fuel.toUpperCase()],
        };

        return (
          <Card key={index} bordered hoverable>
            <Chart
              options={options}
              series={[item.perc]}
              type="radialBar"
              height={250}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default FuelRadialBars;
