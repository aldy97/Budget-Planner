import React, { useState } from "react";
import { Checkbox } from "antd";

function TypeInput() {
  const [isExpense, setIsExpense] = useState(true);

  const onChange = () => {
    if (isExpense) {
      setIsExpense(false);
    } else {
      setIsExpense(true);
    }
  };

  return (
    <>
      <Checkbox onChange={onChange} checked={isExpense}>
        Expense
      </Checkbox>
      <Checkbox onChange={onChange} checked={!isExpense}>
        Income
      </Checkbox>
    </>
  );
}

export default TypeInput;
