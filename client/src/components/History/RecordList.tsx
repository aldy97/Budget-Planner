import React, { useState, useEffect } from "react";
import ListItemMeta from "./ListItemMeta";
import { COLORS } from "../../utils/constants";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Record } from "../Overview/Content";
import axios from "axios";
import { List, message, Popconfirm } from "antd";
import { UpdateRecords, UPDATE_RECORDS } from "../../actions/HomeAction";
import { UPDATE_RECORD_ID, UpdateRecordID } from "../../actions/EditModallAction";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";
import { Dispatch } from "redux";

interface List {
  records?: Record[];
  recordID?: string;
  enabled?: boolean;
  month?: string;
  category?: string;
  updateRecordsToRedux?: any;
  updateRecordIDToRedux?: any;
  user?: any;
}

function RecordList({
  records,
  recordID,
  enabled,
  month,
  category,
  updateRecordsToRedux,
  updateRecordIDToRedux,
  user,
}: List) {
  const [data, setData] = useState<Record[]>([]);

  const generateRecords = (): void => {
    let modifiedRecord: Record[] = [];
    if (!enabled) {
      modifiedRecord = records ? records : [];
    } else {
      if (month && category && month !== "" && category !== "") {
        modifiedRecord = records
          ? records.filter(
              record =>
                record.category === category &&
                record.recordDate.slice(0, 7) === month
            )
          : [];
      } else if (!month && !category) {
        modifiedRecord = records ? records : [];
      } else if (month && month !== "") {
        modifiedRecord = records
          ? records.filter(record => record.recordDate.slice(0, 7) === month)
          : [];
      } else {
        modifiedRecord = records
          ? records.filter(record => record.category === category)
          : [];
      }
    }
    // caution: update state only at the top level
    setData(modifiedRecord.reverse());
  };

  useEffect(() => {
    generateRecords();
  }, [enabled, month, category, records]);

  const updateAllRecordsToRedux = async () => {
    const response = await axios.get(`/api/getRecords/${user}`);
    const records: Record[] = response.data;
    updateRecordsToRedux(records);
  };

  const handleDelBtnClick = async (recordID: string) => {
    const request = { data: { recordID } };
    const response = await axios.delete("/api/deleteRecord", request);
    if (response.data.succ) {
      updateAllRecordsToRedux();
      message.success(response.data.message);
    } else {
      message.error(response.data.message);
    }
  };

  // 如果item未被选中，点击修改会选中该item，如果以被选中则发送请求更新数据库
  const handleEditBtnClick = (record: Record) => {
    if (recordID !== record._id) {
      updateRecordIDToRedux(record._id);
    } else {
      // TODO: 发送请求
    }
  };

  return (
    <>
      <List
        style={{ flex: 1 }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[
              <EditOutlined
                onClick={() => {
                  handleEditBtnClick(item);
                }}
                style={{ color: COLORS.THEMEBLUE, cursor: "pointer" }}
                key="edit-item"
              ></EditOutlined>,
              <Popconfirm
                key="delete-item"
                placement="topLeft"
                title="Deletion is permanent. Do you want to delete this record?"
                onConfirm={() => {
                  handleDelBtnClick(item._id);
                }}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined
                  style={{ color: "#f5222d", cursor: "pointer" }}
                ></DeleteOutlined>
              </Popconfirm>,
            ]}
          >
            <ListItemMeta item={item}></ListItemMeta>
          </List.Item>
        )}
      />
    </>
  );
}

const mapState = (state: RootState) => {
  return {
    user: state.HomeReducer.uid,
    records: state.HomeReducer.records,
    enabled: state.FilterReducer.enabled,
    month: state.FilterReducer.month,
    category: state.FilterReducer.category,
    recordID: state.EditModalReducer.recordID,
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    updateRecordsToRedux(records: Record[]) {
      const action: UpdateRecords = {
        type: UPDATE_RECORDS,
        records,
      };
      dispatch(action);
    },
    updateRecordIDToRedux(recordID: string) {
      const action: UpdateRecordID = {
        type: UPDATE_RECORD_ID,
        recordID,
      };
      dispatch(action);
    },
  };
};

export default connect(mapState, mapDispatch)(RecordList);
