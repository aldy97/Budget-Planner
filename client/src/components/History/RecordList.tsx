import React from "react";
import Tag from "../Overview/CategoryTag";
import { Record } from "../Overview/Content";
import { List } from "antd";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";

interface List {
  records: Record[];
  enabled: boolean;
  month: string;
  category: string;
}

function RecordList() {
  return <div></div>;
}

const mapState = (state: RootState) => {
  return {
    records: state.HomeReducer.records,
    enabled: state.FilterReducer.enabled,
    month: state.FilterReducer.month,
    category: state.FilterReducer.category,
  };
};

export default connect(mapState, null)(RecordList);
