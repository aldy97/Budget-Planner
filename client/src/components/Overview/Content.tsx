import React, { useEffect } from "react";
import SummaryBox from "./SummaryBox";
import { Layout } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";

export interface Record {
  amount: number;
  description: string;
  title: string;
  type: string;
  category: string;
}

interface ContentProps {
  user?: string;
}

function Content({ user }: ContentProps) {
  const { Content } = Layout;

  const fetchRecordsFromServer = async () => {
    const response = await axios.get(`/api/getRecords/${user}`);
    const records: Record[] = response.data;
    const expense = records.filter(record => record.type === "expense");
    const income = records.filter(record => record.type === "income");
    console.log(expense);
    console.log(income);
  };

  useEffect(() => {
    fetchRecordsFromServer();
  }, []);

  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360, marginTop: 30 }}
      >
        <SummaryBox type="expense" amount={300}></SummaryBox>
        <SummaryBox type="income" amount={1000}></SummaryBox>
      </div>
    </Content>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    user: state.HomeReducer.uid,
  };
};

export default connect(mapStateToProps, null)(Content);
