import React from "react";
import { Switch, Space, Select, DatePicker } from "antd";
import { ExpenseCategories, IncomeCategories } from "../../utils/constants";
import {
  TOGGLEFILTER,
  ToggleFilter,
  CHOOSEMONTH,
  ChooseMonth,
  ChooseCategory,
  CHOOSECATEGORY,
} from "../../actions/FilterAction";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";
import { Dispatch } from "redux";

const { Option, OptGroup } = Select;

interface FilterProps {
  enabled: boolean;
  toggleSwitch: any;
  updateMonthToRedux: any;
  updateCategoryToRedux: any;
}

function Filter({
  enabled,
  toggleSwitch,
  updateMonthToRedux,
  updateCategoryToRedux,
}: FilterProps) {
  const handleSwitchChange = () => {
    toggleSwitch(!enabled);
  };
  const handleMonthChange = (date: any, dateString: string) => {
    const month = dateString.split("-")[1];
    updateMonthToRedux(month);
  };

  const handleCategoryChange = (value: string) => {
    updateCategoryToRedux(value);
  };

  return (
    <Space>
      <span>Apply Filter:</span>
      <Switch checked={enabled} onChange={handleSwitchChange}></Switch>
      <DatePicker disabled={!enabled} onChange={handleMonthChange} picker="month" />
      <span>Choose category:</span>
      <Select
        disabled={!enabled}
        allowClear
        style={{ width: 200 }}
        onChange={handleCategoryChange}
      >
        <OptGroup label="Expense">
          {ExpenseCategories.map((category, index) => {
            return (
              <Option key={index} value={category}>
                {category}
              </Option>
            );
          })}
        </OptGroup>
        <OptGroup label="Income">
          {IncomeCategories.map((category, index) => {
            return (
              <Option key={index} value={category}>
                {category}
              </Option>
            );
          })}
        </OptGroup>
      </Select>
    </Space>
  );
}

const mapState = (state: RootState) => {
  return {
    enabled: state.FilterReducer.enabled,
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    toggleSwitch(enabled: boolean) {
      const action: ToggleFilter = {
        type: TOGGLEFILTER,
        enabled,
      };
      dispatch(action);
    },
    updateMonthToRedux(month: string) {
      const action: ChooseMonth = {
        type: CHOOSEMONTH,
        month,
      };
      dispatch(action);
    },
    updateCategoryToRedux(category: string) {
      const action: ChooseCategory = {
        type: CHOOSECATEGORY,
        category,
      };
      dispatch(action);
    },
  };
};

export default connect(mapState, mapDispatch)(Filter);
