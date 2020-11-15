import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  border: 2px solid #eee;
  border-radius: 10px;
  height: 80px;
  line-height: 80px;
  margin-bottom: 30px;
`;

interface Box {
  type: "expense" | "income";
  amount: number;
}

function SummaryBox({ type, amount }: Box) {
  return (
    <StyledBox>
      <span style={{ float: "left" }}>{type}:</span>
      <span style={{ float: "right" }}>${amount}</span>
    </StyledBox>
  );
}

export default SummaryBox;
