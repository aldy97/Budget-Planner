import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 50px;
  text-align: center;
  margin-bottom: 20px;
`;

const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;
  border-radius: 12px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  line-height: 100px;
  font-size: 70px;
  font-style: futura;
  color: white;
  background: linear-gradient(rgb(66, 161, 236), rgb(0, 112, 201));
`;

const Name = styled.div`
  font-size: 30px;
  font-style: futura;
  font-weight: bold;
`;

function Logo() {
  return (
    <Wrapper>
      <LogoWrapper>B</LogoWrapper>
      <Name>Budget Planner</Name>
    </Wrapper>
  );
}

export default Logo;
