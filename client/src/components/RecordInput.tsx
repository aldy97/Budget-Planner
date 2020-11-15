import React from "react";
import TitleInput from "./TitleInput";
import TypeInput from "./TypeInput";
import CategoryInput from "./CategoryInput";
import AmountInput from "./AmountInput";
import { Input, Space } from "antd";

const { TextArea } = Input;

function RecordInput() {
  return (
    <Space size="middle" direction="vertical">
      <TitleInput></TitleInput>
      <TypeInput></TypeInput>
      <CategoryInput></CategoryInput>
      <AmountInput></AmountInput>
      <TextArea size="middle" placeholder="Description" showCount maxLength={50} />
    </Space>
  );
}

export default RecordInput;
