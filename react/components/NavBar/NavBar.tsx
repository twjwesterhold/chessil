import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Colors } from "../../styles";

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
  justify-content: space-evenly;
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: ${Colors.MorningGlory};
  box-shadow: 0 0 5px black;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: green;

  &.active {
    color: blue;
    border-bottom: solid green 2px;
    padding-bottom: 2px;
  }
`;

export default NavBar;
