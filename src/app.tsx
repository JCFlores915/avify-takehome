import React, { useEffect, useState } from "react";
import { fetchGenerationMix } from "./services/energyService";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGenerationMix()
      .then(setData)
      .finally(setData)
      .catch((error) => {
        console.error("Error fetching generation mix:", error);
      });
  }, []);

  return (
    <div>
      <h1>Energy Generation Mix</h1>
    </div>
  );
};

export { App };
