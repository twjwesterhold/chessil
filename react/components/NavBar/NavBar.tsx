import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  background-color: #002020;
`;

const StyledNavLink = styled(NavLink)`
  margin-left: 65px;
  font-size: 20px;
  font-family: "Lucida Console", monospace;
  text-decoration: none;
  color: green;

  &.active {
    color: blue;
    border-bottom: solid green 2px;
    padding-bottom: 5px;
  }
`;

export default NavBar;
