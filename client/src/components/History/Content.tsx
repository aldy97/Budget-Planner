import React from "react";
import { Layout } from "antd";
import Filter from "./Filter";

function Content() {
  const { Content } = Layout;
  return (
    <Content>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360, marginTop: 30 }}
      >
        <Filter></Filter>
      </div>
    </Content>
  );
}

export default Content;
