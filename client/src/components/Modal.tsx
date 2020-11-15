import React, { useState } from "react";
import { Modal } from "antd";

interface ModalProps {
  visible: boolean;
  setVisible: any;
}

function AddRecordModal({ visible, setVisible }: ModalProps) {
  const [confirmLoading, setConfirmLoading] = useState(false);

  // TODO: update DB
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        title="Fill out records details"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
}

export default AddRecordModal;
