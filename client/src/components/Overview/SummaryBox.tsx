import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  padding: 80px;
  border: 2px solid #eee;
  border-radius: 10px;
  margin: 30px;
  text-align: center;
  flex: 1;
  font-size: 30px;
`;

interface Box {
  type: "expense" | "income";
  amount: number;
}

function SummaryBox({ type, amount }: Box) {
  return (
    <StyledBox>
      <div>{type === "expense" ? "Monthly Expense" : "Monthly Income"}:</div>
      <div>${amount}</div>
    </StyledBox>
  );
}

export default SummaryBox;
