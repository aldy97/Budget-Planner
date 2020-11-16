import React, { useState, useEffect } from "react";
import RecordInput from "./RecordInput";
import { Record } from "../components/Overview/Content";
import { message } from "antd";
import axios from "axios";
import { Modal } from "antd";
import { UpdateRecords, UPDATE_RECORDS } from "../actions/HomeAction";
import { CLEAR_RECORD, ClearRecord } from "../actions/ModalAction";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../reducers/index";

interface ModalProps {
  visible: boolean;
  setVisible: any;
  user?: string;
  title?: string;
  type?: string;
  category?: string;
  amount?: number;
  description?: string;
  clearRecord?: any;
  updateRecordsToRedux?: any;
}

function AddRecordModal({
  visible,
  setVisible,
  user,
  title,
  type,
  category,
  amount,
  description,
  clearRecord,
  updateRecordsToRedux,
}: ModalProps) {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const updateAllRecordsToRedux = async () => {
    const response = await axios.get(`/api/getRecords/${user}`);
    const records: Record[] = response.data;
    updateRecordsToRedux(records);
  };

  useEffect(() => {
    console.log("useEffect executed");
    updateAllRecordsToRedux();
  }, []);

  const handleOk = async () => {
    const request = {
      title,
      user,
      type,
      category,
      amount,
      description,
    };
    const response = await axios.post("/api/createRecord", request);
    setVisible(false);
    message.success(response.data);
    clearRecord();
    updateAllRecordsToRedux();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        title="Fill out record details"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <RecordInput></RecordInput>
      </Modal>
    </>
  );
}

const mapState = (state: RootState) => {
  return {
    user: state.HomeReducer.uid,
    title: state.ModalReducer.title,
    type: state.ModalReducer.recordType,
    category: state.ModalReducer.category,
    amount: state.ModalReducer.amount,
    description: state.ModalReducer.description,
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    clearRecord() {
      const action: ClearRecord = {
        type: CLEAR_RECORD,
      };
      dispatch(action);
    },
    updateRecordsToRedux(records: Record[]) {
      const action: UpdateRecords = {
        type: UPDATE_RECORDS,
        records,
      };
      dispatch(action);
    },
  };
};

export default connect(mapState, mapDispatch)(AddRecordModal);
