import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const BigWrapper = styled.div`
  dislay: flex;
  flex-direction: horizontal;
`;

const ChartWrapper = styled.div`
  flex: 1;
`;

function Content() {
  const { Content } = Layout;
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360, marginTop: 30 }}
      >
        <LineChart type="expense"></LineChart>
        <LineChart type="income"></LineChart>
        <BigWrapper>
          <ChartWrapper>
            <PieChart type="expense"></PieChart>
          </ChartWrapper>
          <ChartWrapper>
            <PieChart type="income"></PieChart>
          </ChartWrapper>
        </BigWrapper>
      </div>
    </Content>
  );
}

export default Content;
