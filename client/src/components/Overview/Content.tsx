import React, { useEffect } from "react";
import { Layout } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";

interface ContentProps {
  user?: string;
}

function Content({ user }: ContentProps) {
  const { Content } = Layout;

  const fetchRecordsFromServer = async () => {
    const response = await axios.get(`/api/getRecords/${user}`);
    console.log(response.data);
  };

  useEffect(() => {
    fetchRecordsFromServer();
  }, []);

  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360, marginTop: 30 }}
      >
        Overview
      </div>
    </Content>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    user: state.HomeReducer.uid,
  };
};

export default connect(mapStateToProps, null)(Content);
