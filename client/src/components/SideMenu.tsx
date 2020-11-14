import React, { useState } from "react";
import { Menu, Layout } from "antd";
import {
  LineChartOutlined,
  PieChartOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Redirect } from "react-router-dom";

interface MenuProps {
  selected: number;
}

function SideMenu({ selected }: MenuProps) {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [path, setPath] = useState("");

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return !path ? (
    <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
      <div className="logo"></div>
      <Menu theme="dark" defaultSelectedKeys={[`${selected}`]} mode="inline">
        <Menu.Item
          key="1"
          icon={<PieChartOutlined />}
          onClick={() => {
            setPath("/overview");
          }}
        >
          Overview
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<LineChartOutlined />}
          onClick={() => {
            setPath("/diagram");
          }}
        >
          Diagram
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<ProfileOutlined />}
          onClick={() => {
            setPath("/history");
          }}
        >
          History
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<UserOutlined />}
          onClick={() => {
            setPath("/account");
          }}
        >
          My Account
        </Menu.Item>
      </Menu>
    </Sider>
  ) : (
    <Redirect to={path}></Redirect>
  );
}

export default SideMenu;
