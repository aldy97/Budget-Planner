import React from "react";
import { COLORS } from "../../utils/constants";
import styled from "styled-components";

interface Toggler {
  atLogin: boolean;
  toogle: () => void;
}

interface ItemProps {
  highlighted?: boolean;
}

const StyledToggler = styled.div`
  width: 320px;
  height: 40px;
  line-height: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
`;

const StyledItem = styled.span<ItemProps>`
  flex: 1;
  color: ${props =>
    props.highlighted ? COLORS.THEMEBLUE : COLORS.UNSELECTEDOPTION};
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

function LoginRegToggler({ atLogin, toogle }: Toggler) {
  const handleLoginClick = () => {
    if (!atLogin) {
      toogle();
    }
  };

  const handleRegisterClick = () => {
    if (atLogin) {
      toogle();
    }
  };

  return (
    <StyledToggler>
      <StyledItem onClick={handleLoginClick} highlighted={atLogin}>
        Login
      </StyledItem>
      <StyledItem onClick={handleRegisterClick} highlighted={!atLogin}>
        Register
      </StyledItem>
    </StyledToggler>
  );
}

export default LoginRegToggler;
