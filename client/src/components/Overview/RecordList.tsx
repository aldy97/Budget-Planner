import React from "react";
import Tag from "./CategoryTag";
import { Record } from "./Content";
import { List } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";

interface ListProps {
  type: "expense" | "income";
  records?: Record[];
}

function RecordList({ type, records }: ListProps) {
  const currMonth = moment().month() + 1;

  const getRecordMonth = (date: string): number => {
    return parseInt(date.split("-")[1]);
  };

  // 根据记录类型，展示最新的五项
  const data = records
    ? records
        .filter(record => record.type === type)
        .filter(record => getRecordMonth(record.createdOn) === currMonth)
        .reverse()
        .slice(0, 5)
    : [];

  return (
    <>
      <List
        style={{ flex: 1, marginLeft: 30, marginRight: 30 }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={
                <div>
                  <Tag type={item.type} category={item.category}></Tag>
                  <div>{item.description}</div>
                </div>
              }
            />
            <div style={{ marginRight: 30, color: "#8c8c8c" }}>${item.amount}</div>
          </List.Item>
        )}
      />
    </>
  );
}

const mapState = (state: RootState) => {
  return {
    records: state.HomeReducer.records,
  };
};

export default connect(mapState, null)(RecordList);
