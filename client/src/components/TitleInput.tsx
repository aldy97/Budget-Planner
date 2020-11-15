import React from "react";
import { Input } from "antd";
import { UPDATE_TITLE, UpdateTitle } from "../actions/ModalAction";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface TitleInputProps {
  updateTitleToRedux?: any;
}

function TitleInput({ updateTitleToRedux }: TitleInputProps) {
  const handleInputChange = (e: any) => {
    updateTitleToRedux(e.target.value);
  };
  return <Input onChange={handleInputChange} placeholder="Record title"></Input>;
}

const mapDispatch = (dispatch: Dispatch) => {
  return {
    updateTitleToRedux(title: string) {
      const action: UpdateTitle = {
        type: UPDATE_TITLE,
        title,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatch)(TitleInput);
