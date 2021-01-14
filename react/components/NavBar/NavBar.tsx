import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Fonts, Colors } from "../../styles";

const NavBar = () => {
  return (
      <StyledNavBar>
          <StyledNavLink exact={true} to="/">Home</StyledNavLink>
          <StyledNavLink exact={true} to="/board-editor">Board Editor</StyledNavLink>
      </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  height: 60px;
  width: 100vw;
  background-color: ${Colors.MorningGlory};
`;

const StyledNavLink = styled(NavLink)`
  margin-left: 65px;
  font-size: 20px;
  text-decoration: none;
  color: red;

  &.active {
    color: blue;
    border-bottom: solid green 2px;
    padding-bottom: 2px;
  }
`;

export default NavBar;
