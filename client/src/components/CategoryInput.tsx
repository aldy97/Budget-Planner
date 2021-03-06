import React, { useEffect } from "react";
import { UPDATE_CATEGORY, UpdateCategory } from "../actions/ModalAction";
import { connect } from "react-redux";
import { RootState } from "../reducers/index";
import { Dispatch } from "redux";

interface CategoryInputProps {
  recordType: string;
  updateCategoryToRedux: (cat: string) => void;
}

function CategoryInput({ recordType, updateCategoryToRedux }: CategoryInputProps) {
  // When recordType changes, reset category
  useEffect(() => {
    updateCategoryToRedux("");
  }, [recordType]);

  return <div></div>;
}

const mapState = (state: RootState) => {
  return {
    recordType: state.ModalReducer.recordType,
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    updateCategoryToRedux(category: string) {
      const action: UpdateCategory = {
        type: UPDATE_CATEGORY,
        category,
      };
      dispatch(action);
    },
  };
};

export default connect(mapState, mapDispatch)(CategoryInput);
