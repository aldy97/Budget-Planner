import React from "react";
import { Layout } from "antd";

function Header() {
  const { Header } = Layout;

  return (
    <Header className="site-layout-background" style={{ paddingLeft: 24 }}>
      <div>header</div>
    </Header>
  );
}

export default Header;
