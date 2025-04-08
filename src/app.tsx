import React, { useEffect, useState } from "react";
import { fetchGenerationMix } from "./services/energyService";
import EnergyDonutChart from "./components/EnergyDonutChart";
import EnergyIconList from "./components/EnergyIconList";

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
      <h1>Energy Generation Mix</h1>
      {loading ? <p>Loading...</p> : <EnergyDonutChart data={data} />}
      <h2>Energy Sources</h2>
      {loading ? <p>Loading...</p> : <EnergyIconList data={data} />}
    </div>
  );
};

export { App };
