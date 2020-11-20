import React from "react";
import Tag from "../Overview/CategoryTag";
import { List, Input, Button } from "antd";
import { Record } from "../Overview/Content";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";

interface MetaProps {
  item: Record;
  recordID?: string;
}

function ListItemMeta({ item, recordID }: MetaProps) {
  return (
    <>
      <List.Item.Meta
        title={
          recordID === item._id ? (
            <Input
              size="small"
              style={{ width: 100 }}
              defaultValue={item.title}
            ></Input>
          ) : (
            <div>{item.title}</div>
          )
        }
        description={
          <div>
            <Tag type={item.type} category={item.category}></Tag>
            {recordID === item._id ? (
              <Input
                size="middle"
                style={{ marginTop: 5 }}
                defaultValue={item.description}
              ></Input>
            ) : (
              <div>{item.description}</div>
            )}
          </div>
        }
      />
      <div style={{ marginRight: 30, color: "#8c8c8c" }}>
        {recordID === item._id ? (
          <Input
            size="small"
            style={{ width: 80 }}
            defaultValue={item.amount}
          ></Input>
        ) : (
          <div>${item.amount}</div>
        )}
        <div>{item.recordDate}</div>
        {/* {recordID === item._id && <Button type="primary">Confirm</Button>} */}
      </div>
    </>
  );
}

const mapState = (state: RootState) => {
  return {
    recordID: state.EditModalReducer.recordID,
  };
};

export default connect(mapState, null)(ListItemMeta);
