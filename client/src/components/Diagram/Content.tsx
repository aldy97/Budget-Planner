import React from "react";
import { Layout } from "antd";
import LineChart from "./LineChart";

function Content() {
  const { Content } = Layout;
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360, marginTop: 30 }}
      >
        <LineChart type="expense"></LineChart>
      </div>
    </Content>
  );
}

export default Content;
