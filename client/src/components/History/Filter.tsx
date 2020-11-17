import React from "react";
import { Switch, Space, Select, DatePicker } from "antd";
import { ExpenseCategories, IncomeCategories } from "../../utils/constants";
import { TOGGLEFILTER, ToggleFilter } from "../../actions/FilterAction";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";
import { Dispatch } from "redux";

const { Option, OptGroup } = Select;

interface FilterProps {
  enabled: boolean;
  toggleSwitch: any;
}

function Filter({ enabled, toggleSwitch }: FilterProps) {
  const handleSwitchChange = () => {
    toggleSwitch(!enabled);
  };
  const handleMonthChange = (date: any, dateString: string) => {
    console.log(dateString);
  };

  const handleCategoryChange = (value: string) => {
    console.log(value);
  };
  return (
    <Space>
      <span>Apply Filter:</span>
      <Switch checked={enabled} onChange={handleSwitchChange}></Switch>
      <DatePicker onChange={handleMonthChange} picker="month" />
      <span>Choose category:</span>
      <Select allowClear style={{ width: 200 }} onChange={handleCategoryChange}>
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
  };
};

export default connect(mapState, mapDispatch)(Filter);
