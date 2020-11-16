import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SummaryBox from "./SummaryBox";
import { Layout } from "antd";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export interface Record {
  amount: number;
  description: string;
  title: string;
  type: string;
  category: string;
}

interface ContentProps {
  records?: Record[];
}

function Content({ records }: ContentProps) {
  const { Content } = Layout;

  const [expenseMonthly, setExpenseMonthly] = useState(0);
  const [incomeMonthly, setIncomeMonthly] = useState(0);

  const getExpenseAndIncome = () => {
    let expense = 0;
    let income = 0;
    const expenseRecords: Record[] = records
      ? records.filter(record => record.type === "expense")
      : [];
    const incomeRecords: Record[] = records
      ? records.filter(record => record.type === "income")
      : [];
    expenseRecords.map(records => (expense += records.amount));
    incomeRecords.map(records => (income += records.amount));
    setExpenseMonthly(expense);
    setIncomeMonthly(income);
  };

  useEffect(() => {
    getExpenseAndIncome();
  }, [records]);

  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360, marginTop: 30 }}
      >
        <SummaryWrapper>
          <SummaryBox type="expense" amount={expenseMonthly}></SummaryBox>
          <SummaryBox type="income" amount={incomeMonthly}></SummaryBox>
        </SummaryWrapper>
      </div>
    </Content>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    records: state.HomeReducer.records,
  };
};

export default connect(mapStateToProps, null)(Content);
