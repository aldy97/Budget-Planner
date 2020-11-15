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

  // const fetchRecordsFromServer = async () => {
  //   const response = await axios.get(`/api/getRecords/${user}`);
  //   const records: Record[] = response.data;
  //   const expense: Record[] = records.filter(record => record.type === "expense");
  //   const income: Record[] = records.filter(record => record.type === "income");
  //   let expenseAmount = 0;
  //   let incomeAmount = 0;
  //   expense.map(record => (expenseAmount += record.amount));
  //   income.map(record => (incomeAmount += record.amount));
  //   console.log(expenseAmount);
  //   console.log(incomeAmount);
  // };

  // useEffect(() => {
  //   fetchRecordsFromServer();
  // }, []);

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
