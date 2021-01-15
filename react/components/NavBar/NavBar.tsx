import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Colors, Fonts } from "../../styles";

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
  padding-right: 200px;
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: ${Colors.Cinder};
  box-shadow: 0 0 5px 2px ${Colors.SilverChalice};
`;

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: ${Colors.Nepal};
  font-family: ${Fonts.Montserrat};

  &.active {
    color: ${Colors.Iron};
    border-bottom: solid ${Colors.Nepal} 2px;
    padding-bottom: 2px;
  }
`;

export default NavBar;
