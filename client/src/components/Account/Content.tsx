import React, { useState } from "react";
import { Layout, Input, Space, Button } from "antd";
import { message } from "antd";
import axios from "axios";
import { UPDATE_BUDGET, UpdateBudget } from "../../actions/AccountAction";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

interface ContenProps {
  name?: string;
  email?: string;
  id?: string;
  budget?: number;
  updateBudgetToRedux: (budget: number) => void;
}

function Content({ name, email, id, budget, updateBudgetToRedux }: ContenProps) {
  const { Content } = Layout;
  const [currBudget, setCurrBudget] = useState(budget as number);

  const handleBudgetChange = (e: any) => {
    setCurrBudget(e.target.value);
  };

  const handleConfirmBtnClick = async () => {
    if (currBudget < 0) {
      message.error("Budget must be greater than 0");
      return;
    }
    const request = { _id: id, updatedFields: { budget: currBudget } };
    const response = await axios.put("/api/updateUserInfo", request);
    if (response.data.status) {
      message.success(response.data.message);
      updateBudgetToRedux(response.data.updatedUserInfo.budget as number);
    } else {
      message.error(response.data.message);
    }
  };

  return (
    <Content style={{ margin: "4px 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 30, minHeight: 360, marginTop: 30 }}
      >
        <Space direction="vertical" size="large">
          <div>
            <div>Name</div>
            <Input defaultValue={name}></Input>
          </div>
          <div>
            <div>Email</div>
            <Input defaultValue={email} style={{ width: 224 }} disabled></Input>
          </div>
          <div>
            <div>Set Monthly Budget</div>
            <Input
              defaultValue={currBudget}
              prefix="$"
              suffix="CAD"
              onChange={handleBudgetChange}
            />
          </div>
          <div>
            <div>New Password</div>
            <Input.Password
              iconRender={visible =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            ></Input.Password>
          </div>
          <div>
            <div>Confirm Password</div>
            <Input.Password
              iconRender={visible =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            ></Input.Password>
          </div>
          <Button type="primary" onClick={handleConfirmBtnClick}>
            Confirm
          </Button>
        </Space>
      </div>
    </Content>
  );
}

const mapState = (state: RootState) => {
  return {
    name: state.HomeReducer.name,
    email: state.HomeReducer.email,
    id: state.HomeReducer.uid,
    budget: state.AccountReducer.budget,
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    updateBudgetToRedux(budget: number): void {
      const action: UpdateBudget = {
        type: UPDATE_BUDGET,
        budget,
      };
      dispatch(action);
    },
  };
};

export default connect(mapState, mapDispatch)(Content);
