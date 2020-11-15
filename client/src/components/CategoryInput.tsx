import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { ExpenseCategories, IncomeCategories } from "../utils/constants";
import { UPDATE_CATEGORY, UpdateCategory } from "../actions/ModalAction";
import { connect } from "react-redux";
import { RootState } from "../reducers/index";
import { Dispatch } from "redux";

const { Option } = Select;

interface CategoryInputProps {
  recordType?: string;
  category?: string;
  updateCategoryToRedux?: any;
}

function CategoryInput({
  recordType,
  category,
  updateCategoryToRedux,
}: CategoryInputProps) {
  // When recordType changes, reset category
  useEffect(() => {
    updateCategoryToRedux("");
  }, [recordType]);

  const handleCategoryChange = (value: any) => {
    updateCategoryToRedux(value);
  };

  return (
    <Select
      placeholder="Categories"
      style={{ width: 120 }}
      onChange={handleCategoryChange}
    >
      {ExpenseCategories.map((category, index) => {
        return (
          <Option key={index} value={category}>
            {category}
          </Option>
        );
      })}
    </Select>
  );
}

const mapState = (state: RootState) => {
  return {
    recordType: state.ModalReducer.recordType,
    category: state.ModalReducer.category,
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
