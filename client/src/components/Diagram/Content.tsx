import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const StyledChartsWrapper = styled.div`
  display: flex;
  border: 1px solid black;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
`;

const Title = styled.div`
  text-align: center;
  font-color: #434343;
  font-size: 20px;
  font-weight: bold;
  font-family: futura;
`;

function Content() {
  const { Content } = Layout;
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ paddingTop: 30, minHeight: 360, marginTop: 30 }}
      >
        <StyledChartsWrapper>
          <LeftSection>
            <Title>Expense/Income Trend</Title>
            <LineChart type="expense"></LineChart>
            <LineChart type="income"></LineChart>
          </LeftSection>
          <RightSection>
            <Title>Expense/Income Distribution</Title>
            <PieChart type="expense"></PieChart>
            <PieChart type="income"></PieChart>
          </RightSection>
        </StyledChartsWrapper>
      </div>
    </Content>
  );
}

export default Content;
