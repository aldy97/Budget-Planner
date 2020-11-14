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

  const UrlParam = window.location.href.split("/")[3];

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuItemClick = (route: string) => {
    if (UrlParam !== route) {
      setPath(`/${route}`);
    }
  };

  return !path ? (
    <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
      <div className="logo"></div>
      <Menu theme="dark" defaultSelectedKeys={[`${selected}`]} mode="inline">
        <Menu.Item
          key="1"
          icon={<PieChartOutlined />}
          onClick={() => {
            handleMenuItemClick("overview");
          }}
        >
          Overview
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<LineChartOutlined />}
          onClick={() => {
            handleMenuItemClick("diagram");
          }}
        >
          Diagram
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<ProfileOutlined />}
          onClick={() => {
            handleMenuItemClick("history");
          }}
        >
          History
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<UserOutlined />}
          onClick={() => {
            handleMenuItemClick("account");
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