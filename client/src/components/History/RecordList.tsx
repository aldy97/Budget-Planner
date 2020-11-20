import React, { useState, useEffect } from "react";
import Tag from "../Overview/CategoryTag";
import Modal from "../Modal";
import { COLORS } from "../../utils/constants";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Record } from "../Overview/Content";
import axios from "axios";
import { List, message, Popconfirm } from "antd";
import { UpdateRecords, UPDATE_RECORDS } from "../../actions/HomeAction";
import {
  UPDATE_RECORD_ID,
  UpdateRecordID,
  SWITCH_TO_UPDATE,
  SwitchToUpdate,
} from "../../actions/ModalAction";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";
import { Dispatch } from "redux";

interface List {
  records?: Record[];
  enabled?: boolean;
  month?: string;
  category?: string;
  updateRecordsToRedux?: any;
  updateRecordIDToRedux?: any;
  user?: any;
  switchModalToUpdate?: any;
}

function RecordList({
  records,
  enabled,
  month,
  category,
  updateRecordsToRedux,
  updateRecordIDToRedux,
  switchModalToUpdate,
  user,
}: List) {
  const [data, setData] = useState<Record[]>([]);
  const [visivle, setVisible] = useState(false);

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

  const handleEditBtnClick = (record: Record) => {
    switchModalToUpdate(true);
    updateRecordIDToRedux(record._id);
    setVisible(true);
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
            <List.Item.Meta
              title={item.title}
              description={
                <div>
                  <Tag type={item.type} category={item.category}></Tag>
                  <div>{item.description}</div>
                </div>
              }
            />
            <div style={{ marginRight: 30, color: "#8c8c8c" }}>
              <div>${item.amount}</div>
              <div>{item.recordDate}</div>
            </div>
          </List.Item>
        )}
      />
      <Modal visible={visivle} setVisible={setVisible}></Modal>
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
    switchModalToUpdate(update: boolean) {
      const action: SwitchToUpdate = {
        type: SWITCH_TO_UPDATE,
        update,
      };
      dispatch(action);
    },
  };
};

export default connect(mapState, mapDispatch)(RecordList);
