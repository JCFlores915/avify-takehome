import React, { useEffect, useState } from "react";
import { fetchGenerationMix } from "./services/energyService";
import EnergyDonutChart from "./components/EnergyDonutChart";
import EnergyIconList from "./components/EnergyIconList";
import FuelRadialBars from "./components/FuelRadialBars";
import Loader from "./components/Loader";
import { Typography, Button } from "antd";

const { Title } = Typography;

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOptions, setShowOptions] = useState("0");

  useEffect(() => {
    fetchGenerationMix()
      .then(setData)
      .catch((error) => {
        console.error("Error fetching generation mix:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const options = [
    { label: "Mostrar modo dashboard", value: "0" },
    { label: "Mostrar modo grafico", value: "1" },
    { label: "Mostrar modo lista", value: "2" },
  ];

  const renderContent: { [key: string]: React.ReactNode } = {
    "0": <FuelRadialBars data={data} />,
    "1": <EnergyDonutChart data={data} />,
    "2": <EnergyIconList data={data} />,
  }


  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: 24,
      }}
    >
      <Title level={2} style={{ textAlign: "center" }}>
        UK Energy Generation Mix
      </Title>

      {loading && <Loader />}

      {renderContent[showOptions]}

      {!loading && (
        <div style={{ textAlign: "center", marginTop: 24 }}>
          {options.map((option) => (
            <Button
              key={option.value}
              type={showOptions === option.value ? "primary" : "default"}
              onClick={() => setShowOptions(option.value)}
              style={{ margin: "0 8px" }}
            >
              {option.label}
            </Button>
          ))}
        </div>
      )}
      

    </div>
  );
};

export { App };
