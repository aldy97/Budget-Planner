import React, { useState, useEffect } from "react";
import Tag from "../Overview/CategoryTag";
import { Record } from "../Overview/Content";
import { List } from "antd";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";

interface List {
  records?: Record[];
  enabled?: boolean;
  month?: string;
  category?: string;
}

function RecordList({ records, enabled, month, category }: List) {
  const [data, setData] = useState<Record[]>([]);

  const generateRecords = () => {
    let modifiedRecord: Record[] = [];
    if (!enabled) {
      modifiedRecord = records ? records : [];
    } else {
      if (month && category && month !== "" && category !== "") {
        modifiedRecord = records
          ? records.filter(
              record =>
                record.category === category &&
                record.createdOn.slice(0, 7) === month
            )
          : [];
      } else if (!month && !category) {
        modifiedRecord = records ? records : [];
      } else if (month && month !== "") {
        modifiedRecord = records
          ? records.filter(record => record.createdOn.slice(0, 7) === month)
          : [];
      } else {
        modifiedRecord = records
          ? records.filter(record => record.category === category)
          : [];
      }
    }
    setData(modifiedRecord.reverse());
  };

  useEffect(() => {
    generateRecords();
  }, [enabled, month, category, records]);

  return (
    <>
      <List
        style={{ flex: 1 }}
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
    enabled: state.FilterReducer.enabled,
    month: state.FilterReducer.month,
    category: state.FilterReducer.category,
  };
};

export default connect(mapState, null)(RecordList);
