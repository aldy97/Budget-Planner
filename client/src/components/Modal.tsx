import React, { useState } from "react";
import RecordInput from "./RecordInput";
import { Modal } from "antd";

interface ModalProps {
  visible: boolean;
  setVisible: any;
}

function AddRecordModal({ visible, setVisible }: ModalProps) {
  const [confirmLoading, setConfirmLoading] = useState(false);

  // TODO: update DB when OK is hit, reupdate Redux
  const handleOk = () => {
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

export default AddRecordModal;
