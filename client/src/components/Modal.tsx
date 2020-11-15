import React, { useState } from "react";
import RecordInput from "./RecordInput";
import axios from "axios";
import { Modal } from "antd";
import { connect } from "react-redux";
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
}: ModalProps) {
  const [confirmLoading, setConfirmLoading] = useState(false);

  // TODO: update DB when OK is hit, reupdate Redux
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
    console.log(response);
    setVisible(false);
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

export default connect(mapState, null)(AddRecordModal);
