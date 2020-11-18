import React from "react";
import SideMenu from "../components/SideMenu";
import { Layout } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Diagram() {
  const { Content } = Layout;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu selected={4}></SideMenu>
      <Layout className="site-layout">
        <Header></Header>
        <Content style={{ margin: "3px 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, marginTop: 30 }}
          >
            Account
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}

export default Diagram;
