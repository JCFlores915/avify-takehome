import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: 100 }}>
      <Spin size="large" tip="Loading..." />
    </div>
  );
}

export default Loader;