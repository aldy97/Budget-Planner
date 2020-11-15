import React from "react";
import { Select } from "antd";
import { UPDATE_CATEGORY, UpdateCategory } from "../actions/ModalAction";
import { connect } from "react-redux";
import { RootState } from "../reducers/index";
import { Dispatch } from "redux";

const { Option } = Select;
const ExpenseCategories = ["Dinner", "Gas", "Stock", "Pet"];
const IncomeCategories = ["Salery", "Gift Card", "Give away"];

interface CategoryInputProps {
  recordType?: string;
}

function CategoryInput({ recordType }: CategoryInputProps) {
  const handleCategoryChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      placeholder="Category"
      style={{ width: 120 }}
      onChange={handleCategoryChange}
    >
      {(recordType === "expense" ? ExpenseCategories : IncomeCategories).map(
        (category, index) => {
          return (
            <Option key={index} value={category}>
              {category}
            </Option>
          );
        }
      )}
    </Select>
  );
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
