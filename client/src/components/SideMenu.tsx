import React, { useState } from "react";
import { Menu, Layout } from "antd";
import {
  LineChartOutlined,
  PieChartOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface MenuProps {
  selected: number;
}

function SideMenu({ selected }: MenuProps) {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
      <div className="logo"></div>
      <Menu theme="dark" defaultSelectedKeys={[`${selected}`]} mode="inline">
        <Menu.Item
          key="1"
          icon={<PieChartOutlined />}
          onClick={() => {
            window.location.href = "/home/asdsa";
          }}
        >
          Overview
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<LineChartOutlined />}
          onClick={() => {
            window.location.href = "/overview/asd";
          }}
        >
          Diagram
        </Menu.Item>
        <Menu.Item key="3" icon={<ProfileOutlined />}>
          History
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          My Account
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideMenu;
