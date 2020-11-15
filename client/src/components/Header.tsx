import React, { useState } from "react";
import AddRecordModal from "./Modal";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { connect } from "react-redux";
import { RootState } from "../reducers/index";

interface HeaderProps {
  name?: string;
}

function Header({ name }: HeaderProps) {
  const { Header } = Layout;
  const [visivle, setVisible] = useState(false);

  return (
    <Header className="site-layout-background">
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
      <span style={{ float: "right" }}>
        <UserOutlined style={{ marginRight: 10 }}></UserOutlined>
        {name}
      </span>
      <AddRecordModal visible={visivle} setVisible={setVisible}></AddRecordModal>
    </Header>
  );
}

const mapState = (state: RootState) => {
  return {
    name: state.HomeReducer.name,
  };
};

export default connect(mapState, null)(Header);
