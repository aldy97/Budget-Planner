import React from "react";
import TitleInput from "./TitleInput";
import DateInput from "./RecordDateInput";
import TypeInput from "./TypeInput";
import CategoryInput from "./CategoryInput";
import AmountInput from "./AmountInput";
import { Input, Space } from "antd";
import { UPDATE_DESCRIPTION, UpdateDescription } from "../actions/ModalAction";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const { TextArea } = Input;

interface RecordInputProps {
  updateDescToRedux: (desc: string) => void;
}

function RecordInput({ updateDescToRedux }: RecordInputProps) {
  return (
    <Space size="middle" direction="vertical">
      <TitleInput></TitleInput>
      <DateInput></DateInput>
      <TypeInput></TypeInput>
      <CategoryInput></CategoryInput>
      <AmountInput></AmountInput>
      <TextArea
        size="middle"
        placeholder="Description (optional)"
        showCount
        onChange={e => {
          updateDescToRedux(e.target.value);
        }}
        maxLength={50}
      />
    </Space>
  );
}

const mapDispatch = (dispatch: Dispatch) => {
  return {
    updateDescToRedux(desc: string) {
      const action: UpdateDescription = {
        type: UPDATE_DESCRIPTION,
        description: desc,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatch)(RecordInput);
