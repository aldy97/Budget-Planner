import React from "react";
import { Layout, Space } from "antd";
import Filter from "./Filter";
import RecordList from "./RecordList";

function Content() {
  const { Content } = Layout;
  return (
    <Content>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360, marginTop: 30 }}
      >
        <Filter></Filter>
        <RecordList></RecordList>
      </div>
    </Content>
  );
}

export default Content;
