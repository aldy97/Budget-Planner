import React from "react";
import SideMenu from "../components/SideMenu";
import { Layout } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { RootState } from "../reducers/index";

interface OverViewProps {
  email?: string;
}

function OverView({ email }: OverViewProps) {
  const { Content } = Layout;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu selected={1}></SideMenu>
      <Layout className="site-layout">
        <Header></Header>
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, marginTop: 30 }}
          >
            Overview {email}
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    email: state.HomeReducer.email,
  };
};

export default connect(mapStateToProps, null)(OverView);
