import React, { useState } from "react";
import AddRecordModal from "./Modal";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { Layout } from "antd";

function Header() {
  const { Header } = Layout;
  const [visivle, setVisible] = useState(false);

  return (
    <Header className="site-layout-background" style={{ paddingLeft: 24 }}>
      <Button
        onClick={() => {
          setVisible(true);
        }}
        type="primary"
        shape="round"
        icon={<EditOutlined />}
        size="large"
      >
        Add Record
      </Button>
      <AddRecordModal visible={visivle} setVisible={setVisible}></AddRecordModal>
    </Header>
  );
}

export default Header;
