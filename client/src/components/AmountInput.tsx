import React from "react";
import { InputNumber } from "antd";

const onChange = (value: any) => {
  console.log("changed", value);
};

function AmountInput() {
  return (
    <>
      <InputNumber
        style={{ display: "block" }}
        defaultValue={50}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        onChange={onChange}
      />
    </>
  );
}

export default AmountInput;
