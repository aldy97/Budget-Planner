import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  padding: 30px;
  border: 1px solid #eee;
`;

interface Box {
  type: string;
  amount: number;
}

function SummaryBox({ type, amount }: Box) {
  return (
    <StyledBox>
      <div>{type}</div>
      <div>{amount}</div>
    </StyledBox>
  );
}

export default SummaryBox;
