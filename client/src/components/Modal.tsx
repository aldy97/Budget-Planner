import React, { useState } from "react";
import RecordInput from "./RecordInput";
import { message } from "antd";
import axios from "axios";
import { Modal } from "antd";
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
}: ModalProps) {
  const [confirmLoading, setConfirmLoading] = useState(false);

  // TODO: reupdate Redux
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
    message.success("Record added!");
    clearRecord();
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
  };
};

export default connect(mapState, mapDispatch)(AddRecordModal);
