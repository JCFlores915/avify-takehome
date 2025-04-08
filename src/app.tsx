import React, { useEffect, useState } from "react";
import { fetchGenerationMix } from "./services/energyService";
import EnergyDonutChart from "./components/EnergyDonutChart";
import EnergyIconList from "./components/EnergyIconList";
import Loader from "./components/Loader";
import { Typography, Button } from "antd";

const { Title } = Typography;

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGenerationMix()
      .then(setData)
      .catch((error) => {
        console.error("Error fetching generation mix:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: 24,
      }}
    >
      <Title level={2} style={{ textAlign: "center" }}>
        Energy Generation Mix
      </Title>

      {loading && <Loader />}

      <EnergyDonutChart data={data} />
      <h2>Energy Sources</h2>
      <EnergyIconList data={data} />
    </div>
  );
};

export { App };
