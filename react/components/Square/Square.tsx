import React from "react";
import styled from "styled-components";

import {Colors, Size} from "../../styles";

interface StyleProps {
    isWhite: boolean,
}

interface SquareProps extends StyleProps {
    children: React.ReactNode,
}


const Square = ({ children, ...props }: SquareProps) => {
    return (
        <StyledSquare {...props}>
            {children}
        </StyledSquare>
    );
};

const StyledSquare = styled.button<StyleProps>`
  height: ${Size.SquareSize}px;
  width: ${Size.SquareSize}px;
  background-color: ${(props) => props.isWhite ? Colors.Iron : Colors.Nepal};
  border: none;
  outline: none;
  transition-duration: 0.1s;
  
  &:active {
    background-color: ${(props) => props.isWhite ? Colors.MoonRaker : Colors.WildBlueYonder};
  }
`;

export default Square;
