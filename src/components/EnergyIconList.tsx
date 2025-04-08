import React from "react";
import { GenerationMixItem } from "../interfaces";
import {
  ThunderboltOutlined,
  FireOutlined,
  CloudOutlined,
  BuildOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import { Progress } from "antd";

const iconMap: { [key: string]: React.ReactNode } = {
  wind: <CloudOutlined style={{ color: "#00bcd4", fontSize: 24 }} />,
  solar: <BuildOutlined style={{ color: "#ff9800", fontSize: 24 }} />,
  nuclear: <AlertOutlined style={{ color: "#f44336", fontSize: 24 }} />,
  biomass: "",
  gas: "",
  coal: <FireOutlined style={{ color: "#795548", fontSize: 24 }} />,
  default: <ThunderboltOutlined style={{ color: "#9e9e9e", fontSize: 24 }} />,
};

interface Props {
  data: GenerationMixItem[];
}

const EnergyIconList = ({ data }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alertItems: "center",
            gap: 16,
            backgroundColor: "#fafafa",
            padding: 12,
            borderRadius: 8,
          }}
        >
          {iconMap[item.fuel] || iconMap["default"]}
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 500 }}>{item.fuel.toUpperCase()}</div>
            <Progress
              percent={item.perc}
              strokeColor="#4caf50"
                status="active"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnergyIconList;
