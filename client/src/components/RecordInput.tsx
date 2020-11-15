import React from "react";
import TypeInput from "./TypeInput";
import AmountInput from "./AmountInput";
import { Input, Select, Space } from "antd";

const { Option } = Select;
const { TextArea } = Input;

const handleCategoryChange = (value: any) => {
  console.log(`selected ${value}`);
};

const categories = ["Dinner", "Gas", "Stock", "Pet"];

function RecordInput() {
  return (
    <Space direction="vertical">
      <TypeInput></TypeInput>
      <Select
        placeholder="Category"
        style={{ width: 120 }}
        onChange={handleCategoryChange}
      >
        {categories.map((category, index) => {
          return (
            <Option key={index} value={category}>
              {category}
            </Option>
          );
        })}
      </Select>
      <AmountInput></AmountInput>
      <TextArea placeholder="Description" showCount maxLength={50} />
    </Space>
  );
}

export default RecordInput;
