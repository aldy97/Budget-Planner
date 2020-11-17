import React from "react";
import { Switch, Space, Select, DatePicker } from "antd";
import { ExpenseCategories, IncomeCategories } from "../../utils/constants";

const { Option, OptGroup } = Select;
function Filter() {
  const handleMonthChange = (date: any, dateString: string) => {
    console.log(dateString);
  };

  const handleCategoryChange = (value: string) => {
    console.log(value);
  };
  return (
    <Space>
      <span>Apply Filter:</span>
      <Switch></Switch>
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

export default Filter;
