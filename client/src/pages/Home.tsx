import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  LineChartOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const email = window.location.href.split("/")[4];

function Home() {
  const { Header, Content, Footer, Sider } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
        <div className="logo"></div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Overview
          </Menu.Item>
          <Menu.Item key="2" icon={<LineChartOutlined />}>
            Diagram
          </Menu.Item>
          <Menu.Item key="9" icon={<UserOutlined />}>
            My Account
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft: 24 }}>
          <div>{email}</div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, marginTop: 30 }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Budget Planner ©2020 Created by Feng With ❤️
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
