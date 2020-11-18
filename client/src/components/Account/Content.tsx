import React from "react";
import { Layout } from "antd";

function Content() {
  const { Content } = Layout;
  return (
    <Content style={{ margin: "4px 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 30, minHeight: 360, marginTop: 30 }}
      >
        New Account
      </div>
    </Content>
  );
}

export default Content;
