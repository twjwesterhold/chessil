import React from "react";
import styled from "styled-components";

import { Square } from "../../components";
import { Colors, Size } from "../../styles";

const Board = () => {
    const squares = [];

    for (let i = 0; i <= 63; i++) {
        const isLight = Math.floor(i + i/8) % 2;
        squares.push(
            <Square isLight={isLight === 0}>
                P
            </Square>
        )
    };

    return (
        <StyledBoard>
            {squares}
        </StyledBoard>
    );
};

const StyledBoard = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: ${Size.SquareSize * 8}px;
  height: ${Size.SquareSize * 8}px;
  box-shadow: 1px 1px 5px 2px ${Colors.SilverChalice};
`;

export default Board;
